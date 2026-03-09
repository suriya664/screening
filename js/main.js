// Dark mode functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;

const updateThemeIcon = (isDark) => {
    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector('i');
        if (icon) {
            if (isDark) {
                icon.classList.replace('fa-moon', 'fa-sun');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
            }
        }
    }
};

const initTheme = () => {
    const currentMode = localStorage.getItem('theme') || 'light';
    if (currentMode === 'dark') {
        htmlElement.classList.add('dark');
        updateThemeIcon(true);
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

// ─── Mobile Menu ───────────────────────────────────────────────────────────────
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('show');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
        }
    });

    // Close menu when any nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        });
    });

    // Close on resize back to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            navLinks.classList.remove('show');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) icon.className = 'fas fa-bars';
        }
    });
}

// ─── Scroll Effect Header ──────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// ─── Reveal animations on scroll ──────────────────────────────────────────────
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

// ─── Typewriter Effect ─────────────────────────────────────────────────────────
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
