const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const contentManager = require('./utils/contentManager');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layout');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    const homepageContent = contentManager.getHomepage();
    res.render('index', { 
        title: 'Shlomo Friedman - Portfolio',
        activeTab: 'home',
        content: homepageContent
    });
});

app.get('/development', (req, res) => {
    const pageContent = contentManager.getPage('development');
    res.render('development', { 
        title: 'Development & PM - Shlomo Friedman',
        activeTab: 'development',
        pageContent: pageContent
    });
});

app.get('/itops', (req, res) => {
    const pageContent = contentManager.getPage('itops');
    res.render('itops', { 
        title: 'IT Operations - Shlomo Friedman',
        activeTab: 'itops',
        pageContent: pageContent
    });
});

app.get('/creative', (req, res) => {
    const pageContent = contentManager.getPage('creative');
    res.render('creative', { 
        title: 'Creative Work - Shlomo Friedman',
        activeTab: 'creative',
        pageContent: pageContent
    });
});

// Project detail routes
app.get('/project/amazon-flywheel', (req, res) => {
    try {
        const projectContent = contentManager.getProjectPageData('amazonFlywheel');
        if (!projectContent) {
            return res.status(404).send('Project not found');
        }
        res.render('projects/amazon-flywheel', { 
            title: 'Amazon Flywheel Dashboard - Shlomo Friedman',
            activeTab: 'development',
            project: projectContent
        });
    } catch (error) {
        console.error('Error loading Amazon Flywheel project:', error);
        res.status(500).send('Error loading project: ' + error.message);
    }
});

app.get('/project/sound-around', (req, res) => {
    try {
        const projectContent = contentManager.getProjectPageData('soundAround');
        if (!projectContent) {
            return res.status(404).send('Project not found');
        }
        res.render('projects/sound-around', { 
            title: 'Sound Around Admin Portal - Shlomo Friedman',
            activeTab: 'development',
            project: projectContent
        });
    } catch (error) {
        console.error('Error loading Sound Around project:', error);
        res.status(500).send('Error loading project: ' + error.message);
    }
});

app.get('/project/serenelife', (req, res) => {
    try {
        const projectContent = contentManager.getProjectPageData('serenelife');
        if (!projectContent) {
            return res.status(404).send('Project not found');
        }
        res.render('projects/serenelife', { 
            title: 'SereneLife App - Shlomo Friedman',
            activeTab: 'development',
            project: projectContent
        });
    } catch (error) {
        console.error('Error loading SereneLife project:', error);
        res.status(500).send('Error loading project: ' + error.message);
    }
});

// 404 handler - must be last
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
