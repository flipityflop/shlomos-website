// Modern Portfolio Website JavaScript
// Enhanced interactivity and animations

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initSmoothScrolling();
    initMobileMenu();
    initScrollAnimations();
    initCardInteractions();
    initThemeToggle();
    initProgressiveLoading();
    initProgressBars();
    initGlassWindowEffect(); // Add new glass window effect
    
    // Smooth scrolling for anchor links
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Mobile menu functionality
    function initMobileMenu() {
        const mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-menu-toggle';
        mobileToggle.innerHTML = '☰';
        mobileToggle.setAttribute('aria-label', 'Toggle navigation menu');
        
        const navContainer = document.querySelector('.nav-container');
        const navTabs = document.querySelector('.nav-tabs');
        
        if (navContainer && navTabs) {
            navContainer.insertBefore(mobileToggle, navTabs);
            
            mobileToggle.addEventListener('click', function() {
                navTabs.classList.toggle('active');
                this.innerHTML = navTabs.classList.contains('active') ? '✕' : '☰';
            });
            
            // Close menu when clicking nav links
            navTabs.querySelectorAll('.nav-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    navTabs.classList.remove('active');
                    mobileToggle.innerHTML = '☰';
                });
            });
        }
    }
    
    // Scroll-triggered animations
    function initScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe cards and sections
        const animatedElements = document.querySelectorAll(
            '.project-card, .capability-card, .skill-card, .detail-card, .approach-item, .experience-card'
        );
        
        animatedElements.forEach(el => {
            observer.observe(el);
        });
    }    // Enhanced card interactions
    function initCardInteractions() {
        const cards = document.querySelectorAll('.project-card, .capability-card, .skill-card');
        
        cards.forEach(card => {
            // Remove click animations for non-interactive cards
            // Cards are now purely informational
        });
    }
    
    // Theme toggle functionality (optional dark mode)
    function initThemeToggle() {
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = '🌙';
        themeToggle.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1000;
            background: var(--white);
            border: 1px solid var(--gray-300);
            border-radius: var(--radius);
            padding: var(--spacing-2);
            cursor: pointer;
            font-size: var(--font-size-lg);
            box-shadow: var(--shadow);
            transition: all var(--transition-fast);
        `;
        
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            this.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
            
            // Save preference
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });
        
        // Load saved theme preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '☀️';
        }
        
        document.body.appendChild(themeToggle);
    }
    
    // Progressive loading for better performance
    function initProgressiveLoading() {
        // Lazy load images if any
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Initialize progress bars with proper widths
    function initProgressBars() {
        const progressBars = document.querySelectorAll('.skill-progress-bar');
        
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.style.width;
                    bar.style.setProperty('--progress-width', width);
                    bar.style.width = '0%';
                    
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                    
                    progressObserver.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });
        
        progressBars.forEach(bar => {
            progressObserver.observe(bar);
        });
    }
    
    // Initialize glass window effect
    function initGlassWindowEffect() {
        const glassElements = document.querySelectorAll('.glass-window');
        
        glassElements.forEach(el => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-glass-in');
                    } else {
                        entry.target.classList.remove('animate-glass-in');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            observer.observe(el);
        });
        
        // Glass Window Effect for Capabilities Section
        const capabilityCards = document.querySelectorAll('.capability-card');
        
        capabilityCards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Convert to percentage for CSS custom properties
                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;
                
                // Set CSS custom properties for the light position
                card.style.setProperty('--mouse-x', `${xPercent}%`);
                card.style.setProperty('--mouse-y', `${yPercent}%`);
            });
            
            card.addEventListener('mouseleave', function() {
                // Reset to center when mouse leaves
                card.style.setProperty('--mouse-x', '50%');
                card.style.setProperty('--mouse-y', '50%');
            });
        });
    }
    
    // Call progress bar initialization
    initProgressBars();
    
    // Add loading bar for page transitions
    function showLoadingBar() {
        const loadingBar = document.createElement('div');
        loadingBar.className = 'loading-bar';
        document.body.appendChild(loadingBar);
        
        setTimeout(() => {
            loadingBar.style.transform = 'scaleX(1)';
        }, 10);
        
        return loadingBar;
    }
    
    function hideLoadingBar(loadingBar) {
        setTimeout(() => {
            loadingBar.style.transform = 'scaleX(1)';
            setTimeout(() => {
                loadingBar.remove();
            }, 300);
        }, 500);
    }
    
    // Enhanced navigation with loading states
    const navLinks = document.querySelectorAll('.nav-tab:not([href^="#"])');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!e.ctrlKey && !e.metaKey) {
                const loadingBar = showLoadingBar();
                // The loading bar will be hidden when the new page loads
            }
        });
    });
      // Navbar scroll effect
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'var(--bg-header-footer)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.8)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'var(--bg-header-footer)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
                navbar.style.backdropFilter = 'blur(20px)';
            }
        }
        lastScrollY = window.scrollY;
    });
    
    // Enhanced button interactions
    const buttons = document.querySelectorAll('.cta-button, .work-button, .explore-button, .portfolio-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Form enhancements (if contact forms are added later)
    function initFormEnhancements() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                const submitButton = form.querySelector('button[type="submit"]');
                if (submitButton) {
                    submitButton.innerHTML = '<span class="loading"></span> Sending...';
                    submitButton.disabled = true;
                }
            });
        });
    }
      // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        });
    }
    
    // Initialize progress bars with proper widths
    function initProgressBars() {
        const progressBars = document.querySelectorAll('.skill-progress-bar');
        
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.style.width;
                    bar.style.setProperty('--progress-width', width);
                    bar.style.width = '0%';
                    
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                    
                    progressObserver.unobserve(bar);
                }
            });
        }, { threshold: 0.5 });
        
        progressBars.forEach(bar => {
            progressObserver.observe(bar);
        });
    }
    
    // Call progress bar initialization
    initProgressBars();
    
    // Add loading bar for page transitions
    function showLoadingBar() {
        const loadingBar = document.createElement('div');
        loadingBar.className = 'loading-bar';
        document.body.appendChild(loadingBar);
        
        setTimeout(() => {
            loadingBar.style.transform = 'scaleX(1)';
        }, 10);
        
        return loadingBar;
    }
    
    function hideLoadingBar(loadingBar) {
        setTimeout(() => {
            loadingBar.style.transform = 'scaleX(1)';
            setTimeout(() => {
                loadingBar.remove();
            }, 300);
        }, 500);
    }
      // Enhanced navigation with loading states
    const navigationLinks = document.querySelectorAll('.nav-tab:not([href^="#"])');
    navigationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!e.ctrlKey && !e.metaKey) {
                const loadingBar = showLoadingBar();
                // The loading bar will be hidden when the new page loads
            }        });
    });
});
