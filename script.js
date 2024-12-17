document.addEventListener('DOMContentLoaded', function() {
    const projectsWrapper = document.querySelector('.projects-wrapper');
    const prevButton = document.querySelector('.nav-arrow.prev');
    const nextButton = document.querySelector('.nav-arrow.next');
    const projectCards = document.querySelectorAll('.project-card');
    
    let currentPage = 0;
    const cardsPerPage = 3;
    const totalPages = Math.ceil(projectCards.length / cardsPerPage);
    
    function updateVisibility() {
        projectCards.forEach((card, index) => {
            if (index >= currentPage * cardsPerPage && index < (currentPage + 1) * cardsPerPage) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update button states
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage >= totalPages - 1;
    }
    
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            currentPage++;
            updateVisibility();
        }
    });
    
    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updateVisibility();
        }
    });
    
    // Initial setup
    updateVisibility();
    
    // Get the "Let's Talk" button
    const letsTalkBtn = document.querySelector('.hero-content button');
    
    letsTalkBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the contact section
        const contactSection = document.getElementById('contact');
        
        // Get header height for offset
        const headerHeight = document.querySelector('header').offsetHeight;
        
        // Calculate the target position
        const targetPosition = contactSection.offsetTop - headerHeight;
        
        // Smooth scroll to contact section
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
    // You can add API calls or email service integration here
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the target section id from the href
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Get header height for offset
            const headerHeight = document.querySelector('header').offsetHeight;
            
            // Calculate the target position
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            // Smooth scroll to target
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});

// Add active class to current section in navigation
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();  // Prevent click from bubbling
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    }
}); 