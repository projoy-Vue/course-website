
// Sticky Navbar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 50);
});

// Profile Dropdown Menu
const profileButton = document.getElementById('profile-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

profileButton.addEventListener('click', function (e) {
    e.preventDefault();
    dropdownMenu.classList.toggle('active');
});

// Search Bar Suggestions
const searchInput = document.getElementById('search-input');
const suggestionsBox = document.getElementById('suggestions-box');

searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();
    if (query.length > 0) {
        suggestionsBox.style.display = 'block';
        // For demo purposes, we just show static suggestions
        suggestionsBox.innerHTML = `
            <p>Suggestion 1</p>
            <p>Suggestion 2</p>
            <p>Suggestion 3</p>
        `;
    } else {
        suggestionsBox.style.display = 'none';
    }
});

// Sidebar Toggle
const sidebarToggle = document.querySelector('.sidebar-toggle span');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', function () {
    sidebar.classList.toggle('active');
    console.log('clicked');
});
// Modal Functionality
const ctaButton = document.getElementById('cta-button');
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close-button');

ctaButton.addEventListener('click', function () {
    modal.classList.add('show');
    console.log('clicked');
    // modal.style.display = 'block';
});

closeButton.addEventListener('click', function () {
    modal.classList.remove('show');
    console.log('clicked');
    // modal.style.display = 'none';
});

window.addEventListener('click', function (e) {
    if (e.target == modal) {
        // modal.style.display = 'none';
    }
});
// course overview
const slider = document.querySelector('.course-slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
    slider.scrollLeft += 300;
    scrollAmount += 300;
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = slider.scrollWidth - slider.clientWidth;
    }
});

prevBtn.addEventListener('click', () => {
    slider.scrollLeft -= 300;
    scrollAmount -= 300;
    if (scrollAmount <= 0) {
        scrollAmount = 0;
    }
});

// how to work 
document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    steps.forEach(step => {
        observer.observe(step);
    });
});
// feauther section

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        accordionItem.classList.toggle('active');
    });
});
const ctx = document.getElementById('engagement-chart').getContext('2d');
const engagementChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Tutorials', 'Blogs', 'Case Studies', 'Guides'],
        datasets: [{
            label: 'User Engagement',
            data: [30, 50, 40, 60],
            backgroundColor: ['#0073e6', '#0073e6', '#0073e6', '#0073e6']
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//event section

// Dummy Data for Map Overlays
const eventLocations = [
    { title: "Web Development Workshop", lat: 40.7128, lng: -74.0060 },
    { title: "Data Science Webinar", lat: 37.7749, lng: -122.4194 },
    { title: "Design Bootcamp", lat: 34.0522, lng: -118.2437 }
];

// Initialize Map (using a map library like Leaflet.js or Google Maps API)
function initMap() {
    const map = L.map('events-map').setView([39.8283, -98.5795], 4); // Centered on USA
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18
    }).addTo(map);

    eventLocations.forEach(location => {
        const marker = L.marker([location.lat, location.lng]).addTo(map);
        marker.bindPopup(`<b>${location.title}</b><br>${location.lat}, ${location.lng}`).openPopup();
    });
}

// Initialize Carousel
const carousel = document.querySelector('.events-carousel');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

prevButton.addEventListener('click', () => {
    console.log('clicked')
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
});

// Register Event Click
document.querySelectorAll('.register-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('clicked')
        alert("Registration form coming soon!");
    });
});

// Load the Map when the page loads
window.addEventListener('load', initMap);
// testmonal section

// Initialize Carousel
const carousels = document.querySelector('.testimonials-carousel');
let currentIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');

function showSlide(index) {
    carousels.scrollTo({
        left: slides[index].offsetLeft,
        behavior: 'smooth'
    });
}

document.querySelector('.submit-testimonial-btn').addEventListener('click', () => {
    alert('Testimonial submission form coming soon!');
});

document.querySelector('.more-stories-link').addEventListener('click', (e) => {
    e.preventDefault();
    // Scroll to the success stories section or load a new page
    alert('Navigating to Success Stories...');
});

// Dynamic Rating System
document.querySelectorAll('.rating-stars').forEach(star => {
    const rating = star.getAttribute('data-rating');
    star.style.setProperty('--rating', rating);
});
//
// Real-time Email Validation
document.getElementById('email').addEventListener('input', function() {
    const emailInput = this;
    const emailValue = emailInput.value;

    // Simple email validation pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;

    if (emailValue.match(emailPattern)) {
        emailInput.classList.add('valid');
        emailInput.classList.remove('invalid');
    } else {
        emailInput.classList.add('invalid');
        emailInput.classList.remove('valid');
    }
});

// Form Submission (Optional: Add this if you want to handle form submission with JavaScript)
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');

    if (emailInput.classList.contains('valid')) {
        // Proceed with form submission (e.g., send data to server)
        alert('Thank you for signing up!');
    } else {
        alert('Please enter a valid email address.');
    }
});
