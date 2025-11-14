// Parallax and Scroll Effects
document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect
    const nav = document.getElementById('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // Active navigation link highlighting based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Parallax background effect
    const parallaxBgs = document.querySelectorAll('.parallax-bg');
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        parallaxBgs.forEach(bg => {
            const rect = bg.getBoundingClientRect();
            const speed = 0.3;
            
            if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
                const yPos = -(scrolled * speed);
                bg.style.transform = `translateY(${yPos}px)`;
            }
        });
    }

    window.addEventListener('scroll', updateParallax);

    // Subtle parallax for elements (removed for cleaner look)
    // const parallaxElements = document.querySelectorAll('[data-parallax]');

    // Smooth scroll for anchor links within the same page only
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Only prevent default for anchor links (starting with #) on the same page
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
            // For file links (like quality.html, index.html), allow normal navigation
        });
    });

    // Enhanced scroll-triggered animations with stagger effect
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                
                // Stagger effect for grid items
                if (entry.target.parentElement && (
                    entry.target.parentElement.classList.contains('objectives-grid') || 
                    entry.target.parentElement.classList.contains('problem-grid') ||
                    entry.target.parentElement.classList.contains('impact-grid') ||
                    entry.target.parentElement.classList.contains('next-steps-grid')
                )) {
                    const siblings = Array.from(entry.target.parentElement.children);
                    const index = siblings.indexOf(entry.target);
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                } else {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, observerOptions);

    // Observe all cards and sections with enhanced animations
    const animatedElements = document.querySelectorAll(
        '.quality-card, .metric-card, .feature-item, .track-card, .admin-feature-item, .roadmap-item, .benefit-card, .objective-item, .problem-card, .deliverable-category, .impact-item, .next-step-item, .intro-section'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Special handling for section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(30px)';
        header.style.transition = 'opacity 1s ease, transform 1s ease';
        observer.observe(header);
    });

    // Readiness bar animation
    const readinessFill = document.querySelector('.readiness-fill');
    if (readinessFill) {
        const readinessObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = readinessFill.style.width;
                    readinessFill.style.width = '0%';
                    setTimeout(() => {
                        readinessFill.style.width = width;
                    }, 100);
                }
            });
        }, { threshold: 0.5 });

        readinessObserver.observe(readinessFill);
    }

    // Counter animations removed for cleaner, simpler experience

    // Parallax effect removed for sections to prevent overlap - only background parallax remains

    // Performance optimization: throttle scroll events
    let ticking = false;

    function optimizedScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', optimizedScroll, { passive: true });

    // Mark sections as animated when they come into view for underline animation
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.objectives-section, .problems-section, .deliverables-section, .impact-section, .next-steps-section, .journey-section, .blockers-section').forEach(section => {
        sectionObserver.observe(section);
    });

    // Initialize on load
    updateParallax();
});
