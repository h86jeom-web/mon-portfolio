/**
 * MonPortfolio - Main JavaScript
 * Author: Jérôme Hengan
 *
 * This file contains the main JavaScript functionality for the portfolio website.
 */

// ========================================
// Theme Toggle (Dark/Light Mode)
// ========================================

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const THEME_KEY = 'portfolio-theme';

/**
 * Get the initial theme based on localStorage or system preference
 */
function getInitialTheme() {
    // Check localStorage first
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
        return savedTheme;
    }

    // Fall back to system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
}

/**
 * Set the theme on the HTML element
 */
function setTheme(theme) {
    if (theme === 'light') {
        html.setAttribute('data-theme', 'light');
        themeToggle.setAttribute('aria-pressed', 'true');
    } else {
        html.removeAttribute('data-theme');
        themeToggle.setAttribute('aria-pressed', 'false');
    }
    localStorage.setItem(THEME_KEY, theme);
}

/**
 * Toggle between light and dark themes
 */
function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Initialize theme on page load
setTheme(getInitialTheme());

// Add click event listener to theme toggle button
themeToggle.addEventListener('click', toggleTheme);

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only update if user hasn't manually set a preference
    if (!localStorage.getItem(THEME_KEY)) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});


// ========================================
// Mobile Navigation Toggle
// ========================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav__link');

// Toggle mobile menu
function toggleMenu() {
    const isActive = navMenu.classList.toggle('is-active');
    navToggle.classList.toggle('is-active');

    // Update ARIA attributes
    navToggle.setAttribute('aria-expanded', isActive);
    navToggle.setAttribute('aria-label', isActive ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation');

    // Prevent body scroll when menu is open
    document.body.style.overflow = isActive ? 'hidden' : '';
}

// Close menu when clicking toggle button
navToggle.addEventListener('click', toggleMenu);

// Close menu when clicking a navigation link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-active')) {
            toggleMenu();
        }
    });
});

// ========================================
// Scroll Animations - Intersection Observer
// ========================================

const fadeInSections = document.querySelectorAll('.fade-in-section');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optional: stop observing after animation (uncomment if needed)
            // fadeInObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15, // Trigger when 15% of the section is visible
    rootMargin: '0px 0px -50px 0px' // Slight offset from bottom
});

// Observe all sections with fade-in animation
fadeInSections.forEach(section => {
    fadeInObserver.observe(section);
});


// ========================================
// Dynamic Projects Loading
// ========================================

/**
 * Generate HTML for a single project card
 */
function createProjectCard(project, index) {
    const tags = project.tags
        .map(tag => `<span class="tag" role="listitem">${tag}</span>`)
        .join('\n                                ');

    const titleContent = project.isExternal
        ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-card__title-link">${project.name}</a>`
        : project.name;

    const linkText = project.isExternal ? 'Voir sur GitHub →' : 'Voir le projet →';
    const linkLabel = project.isExternal
        ? `Voir ${project.name} sur GitHub`
        : `Voir le projet ${project.name}`;

    return `
        <article class="project-card" aria-labelledby="project-${project.id}-title" role="listitem">
            <div class="project-card__header" role="presentation"></div>
            <div class="project-card__content">
                <h3 class="project-card__title" id="project-${project.id}-title">
                    ${titleContent}
                </h3>
                <p class="project-card__description">
                    ${project.description}
                </p>
                <div class="project-card__tags" role="list" aria-label="Technologies utilisées">
                    ${tags}
                </div>
                <div class="project-card__links">
                    <a href="${project.url}" ${project.isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''} class="project-link" aria-label="${linkLabel}">
                        ${linkText}
                    </a>
                </div>
            </div>
        </article>
    `;
}

/**
 * Load and display projects from JSON file
 */
async function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    if (!projectsGrid) {
        // Production: silently return if container not found
        // console.warn('Projects grid container not found');
        return;
    }

    try {
        // Fetch projects data
        const response = await fetch('data/projects.json');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Validate data
        if (!data.projects || !Array.isArray(data.projects)) {
            throw new Error('Invalid projects data format');
        }

        // Generate project cards HTML
        const projectsHTML = data.projects
            .map((project, index) => createProjectCard(project, index))
            .join('\n');

        // Update the grid with projects
        projectsGrid.innerHTML = projectsHTML;

        // Re-observe the project cards for fade-in animation
        const projectCards = projectsGrid.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.classList.add('fade-in-section');
            fadeInObserver.observe(card);
        });

    } catch (error) {
        // Production: silently handle error
        // console.error('Error loading projects:', error);

        // Display error message
        projectsGrid.innerHTML = `
            <div class="projects__error" role="alert">
                <p>Impossible de charger les projets. Veuillez réessayer plus tard.</p>
            </div>
        `;
    }
}

// Load projects when DOM is ready
loadProjects();
