// Theme Switcher Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const toggleLabel = document.querySelector('.toggle-label');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply the saved theme
    setTheme(savedTheme);
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
    
    // Function to set theme
    function setTheme(theme) {
        if (theme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            toggleLabel.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            body.removeAttribute('data-theme');
            toggleLabel.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        }
    }
    
    // Add hover effects for better interactivity
    const cards = document.querySelectorAll('.social-card, .overview-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add keyboard navigation for accessibility
    themeToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
    
    // Smooth transitions on theme change
    function addTransitionClass() {
        body.classList.add('theme-transition');
        setTimeout(() => {
            body.classList.remove('theme-transition');
        }, 300);
    }
    
    // Add transition class when theme changes
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                addTransitionClass();
            }
        });
    });
    
    observer.observe(body, {
        attributes: true,
        attributeFilter: ['data-theme']
    });
});

// Add CSS for smooth theme transitions
const style = document.createElement('style');
style.textContent = `
    .theme-transition * {
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
    }
`;
document.head.appendChild(style);
