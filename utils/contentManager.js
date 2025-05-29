const fs = require('fs');
const path = require('path');

/**
 * Content Manager - Loads and manages JSON content data
 */
class ContentManager {
    constructor() {
        this.dataPath = path.join(__dirname, '..', 'data');
        this.cache = {};
        this.loadAllContent();
    }

    /**
     * Load all JSON content files
     */
    loadAllContent() {
        try {
            // Load projects data
            const projectsPath = path.join(this.dataPath, 'projects.json');
            this.cache.projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));

            // Load homepage data
            const homepagePath = path.join(this.dataPath, 'homepage.json');
            this.cache.homepage = JSON.parse(fs.readFileSync(homepagePath, 'utf8'));

            // Load pages data
            const pagesPath = path.join(this.dataPath, 'pages.json');
            this.cache.pages = JSON.parse(fs.readFileSync(pagesPath, 'utf8'));

            console.log('✅ Content loaded successfully from JSON files');
        } catch (error) {
            console.error('❌ Error loading content:', error.message);
            // Initialize empty objects as fallback
            this.cache = {
                projects: {},
                homepage: {},
                pages: {}
            };
        }
    }

    /**
     * Get homepage content
     */
    getHomepage() {
        return this.cache.homepage;
    }

    /**
     * Get specific project data
     */
    getProject(projectKey) {
        return this.cache.projects[projectKey] || null;
    }

    /**
     * Get all projects
     */
    getAllProjects() {
        return this.cache.projects;
    }

    /**
     * Get page data (development, itops, creative)
     */
    getPage(pageKey) {
        return this.cache.pages[pageKey] || null;
    }

    /**
     * Get all pages data
     */
    getAllPages() {
        return this.cache.pages;
    }

    /**
     * Reload content from files (useful for development)
     */
    reload() {
        this.loadAllContent();
    }    /**
     * Get content for a specific project page template
     */
    getProjectPageData(projectKey) {
        const project = this.getProject(projectKey);
        if (!project) return null;

        // Transform the flat project data into the expected nested structure
        return {
            ...project,
            breadcrumb: 'Development & PM',
            overview: {
                description: project.description,
                statusItems: [
                    {
                        label: project.statusLabel || 'Status',
                        value: project.status,
                        statusClass: project.status === 'DEPLOYED' ? 'status-completed' : 
                                   project.status === 'OPERATIONAL' ? 'status-completed' : 'status-in-progress'
                    },
                    {
                        label: 'Uptime',
                        value: project.metrics?.uptime || 'N/A'
                    },
                    {
                        label: 'Load Time',
                        value: project.metrics?.loadTime || 'N/A'
                    },
                    {
                        label: 'Daily Users',
                        value: project.metrics?.dailyUsers || 'N/A'
                    }
                ]
            },
            details: {
                title: 'Technical Implementation',
                sections: [
                    {
                        icon: '🔧',
                        title: 'Technologies',
                        items: project.technologies || [],
                        techStack: project.techTags || []
                    },
                    {
                        icon: '⭐',
                        title: 'Key Features',
                        items: project.features || [],
                        metrics: project.featureMetrics ? Object.entries(project.featureMetrics).map(([key, value]) => ({
                            value: value,
                            label: key.replace(/([A-Z])/g, ' $1').toLowerCase()
                        })) : []
                    },
                    {
                        icon: '📈',
                        title: 'Impact & Results',
                        items: project.impact || [],
                        metrics: project.impactMetrics ? Object.entries(project.impactMetrics).map(([key, value]) => ({
                            value: value,
                            label: key.replace(/([A-Z])/g, ' $1').toLowerCase()
                        })) : []
                    }
                ]
            },
            challenges: {
                title: 'Technical Challenges & Solutions',
                items: (project.challenges || []).map(challenge => ({
                    title: challenge.title,
                    description: challenge.solution
                }))
            },
            navigation: {
                back: {
                    link: '/development',
                    text: '← Back to Development'
                }
                // next project links can be added here if needed
            },
            // Add any additional computed properties here
            hasMetrics: project.metrics && Object.keys(project.metrics).length > 0,
            hasChallenges: project.challenges && project.challenges.length > 0,
            hasTimeline: project.timeline && project.timeline.length > 0
        };
    }
}

// Create singleton instance
const contentManager = new ContentManager();

module.exports = contentManager;
