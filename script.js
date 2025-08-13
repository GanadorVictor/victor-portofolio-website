// /**
//  * Victor Muturi - Portfolio Website
//  * Main JavaScript File
//  */

// document.addEventListener('DOMContentLoaded', function() {
//     // Mobile Navigation
//     const burger = document.querySelector('.burger');
//     const navLinks = document.querySelector('.nav-links');
//     const navLinksItems = document.querySelectorAll('.nav-links li');
    
//     // Initialize animations
//     initAnimations();
    
//     // Setup event listeners
//     setupEventListeners();

//     function setupEventListeners() {
//         // Mobile menu toggle
//         burger.addEventListener('click', toggleMobileMenu);
        
//         // Close mobile menu when clicking on nav items
//         navLinksItems.forEach(item => {
//             item.addEventListener('click', closeMobileMenu);
//         });
        
//         // Smooth scrolling for anchor links
//         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//             anchor.addEventListener('click', smoothScroll);
//         });
        
//         // Scroll event for header and animations
//         window.addEventListener('scroll', handleScroll);
//     }

//     function toggleMobileMenu() {
//         navLinks.classList.toggle('active');
//         burger.classList.toggle('active');
//         document.body.classList.toggle('no-scroll');
//     }

//     function closeMobileMenu() {
//         navLinks.classList.remove('active');
//         burger.classList.remove('active');
//         document.body.classList.remove('no-scroll');
//     }

//     function smoothScroll(e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         const targetElement = document.querySelector(targetId);
        
//         if (targetElement) {
//             window.scrollTo({
//                 top: targetElement.offsetTop - 80,
//                 behavior: 'smooth'
//             });
            
//             // Close mobile menu if open
//             closeMobileMenu();
//         }
//     }

//     function handleScroll() {
//         // Sticky header
//         const header = document.querySelector('header');
//         header.classList.toggle('sticky', window.scrollY > 50);
        
//         // Animate elements on scroll
//         animateOnScroll();
//     }

//     function initAnimations() {
//         // Run once on page load
//         animateOnScroll();
        
//         // Initialize skill bar animations
//         animateSkillBars();
//     }

//     function animateOnScroll() {
//         const animatedElements = document.querySelectorAll(
//             '.skill-line, .tech-skill, .project-card'
//         );
        
//         animatedElements.forEach(element => {
//             const elementPosition = element.getBoundingClientRect().top;
//             const screenPosition = window.innerHeight / 1.3;
            
//             if (elementPosition < screenPosition) {
//                 element.classList.add('animate');
//             }
//         });
//     }

//     function animateSkillBars() {
//         const skillBars = document.querySelectorAll('.skill-line');
        
//         skillBars.forEach(bar => {
//             const width = bar.classList.contains('english') ? '100%' :
//                          bar.classList.contains('spanish') ? '90%' :
//                          bar.classList.contains('french') ? '85%' :
//                          bar.classList.contains('swahili') ? '100%' : '0';
            
//             bar.style.setProperty('--width', width);
//         });
//     }

//     // Intersection Observer for more advanced animations
//     const observerOptions = {
//         threshold: 0.1
//     };

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('in-view');
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, observerOptions);

//     // Observe all elements with 'animate-on-scroll' class
//     document.querySelectorAll('.animate-on-scroll').forEach(el => {
//         observer.observe(el);
//     });
// });