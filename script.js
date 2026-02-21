/* ===================================
   FormSend - Combined JavaScript
   All scripts from all HTML pages
   =================================== */

// ============ index.html ============

// Dropdown toggle functionality
function toggleDropdown(element) {
    const dropdown = element.parentElement;
    const menu = dropdown.querySelector('.dropdown-menu');
    
    // Close all other dropdowns
    document.querySelectorAll('.custom-dropdown').forEach(d => {
        if (d !== dropdown) {
            d.querySelector('.dropdown-toggle').classList.remove('active');
            d.querySelector('.dropdown-menu').classList.remove('show');
        }
    });
    
    // Toggle current dropdown
    element.classList.toggle('active');
    menu.classList.toggle('show');
}

// Select option from dropdown
function selectOption(element) {
    const menu = element.parentElement;
    const dropdown = menu.parentElement;
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const text = dropdown.querySelector('.dropdown-text');
    
    // Remove selected class from all items
    menu.querySelectorAll('.dropdown-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Add selected class to clicked item
    element.classList.add('selected');
    
    // Update toggle text
    text.textContent = element.textContent;
    
    // Close dropdown with animation
    setTimeout(() => {
        toggle.classList.remove('active');
        menu.classList.remove('show');
    }, 150);
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-dropdown')) {
        document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
            toggle.classList.remove('active');
        });
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('show');
        });
    }
});

// Switch active location card
function activateCard(element) {
    const cards = document.querySelectorAll('.location-card');
    cards.forEach(card => card.classList.remove('active'));
    element.classList.add('active');

    const city = element.querySelector('h3').innerText.split(',')[0];
    const mapText = document.querySelector('.map-section .map-pin span');
    if(mapText) {
        mapText.innerText = city + " Business District";
    }
}

// Form input animations
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.querySelector('label').style.color = '#2563EB';
        });
        input.addEventListener('blur', () => {
            input.parentElement.querySelector('label').style.color = '#111827';
        });
    });
});


// ============ about.html ============

// Initialize AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
}

// Simple Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (nav && window.scrollY > 50) {
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
    } else if (nav) {
        nav.style.boxShadow = 'none';
    }
});


// ============ lumex.html ============

// Initialize AOS for lumex page
if (typeof AOS !== 'undefined') {
    AOS.init({ 
        duration: 800, 
        once: true 
    });
}


// ============ supply.html ============

// Simple scroll effect for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar && window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
    } else if (navbar) {
        navbar.style.boxShadow = 'none';
    }
});


// ============ SCROLL REVEAL ANIMATION ============

// Scroll Reveal Animation
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal, .reveal-up').forEach(el => observer.observe(el));

// Simple Button Micro-interaction
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mousedown', () => button.style.transform = 'scale(0.95)');
    button.addEventListener('mouseup', () => button.style.transform = 'scale(1)');
});

/* ===================================
   End of Combined JavaScript
   =================================== */
