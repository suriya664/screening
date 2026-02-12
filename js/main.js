// Dark mode functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

const initTheme = () => {
    const currentMode = localStorage.getItem('theme') || 'light';
    if (currentMode === 'dark') {
        htmlElement.classList.add('dark');
        updateThemeIcon(true);
    }
};

const updateThemeIcon = (isDark) => {
    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector('i');
        if (isDark) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    }
};

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        const isDark = htmlElement.classList.toggle('dark');
        const newMode = isDark ? 'dark' : 'light';
        localStorage.setItem('theme', newMode);
        updateThemeIcon(isDark);
    });
}

// Initialize theme on page load
initTheme();

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Scroll Effect Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Reveal animations on scroll
const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
};

window.addEventListener('scroll', reveal);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    reveal();
});

// Typewriter Effect (Simplified for index.html)
const typeEffect = (element, text, speed) => {
    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, speed);
};

window.typeEffect = typeEffect;
