document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Menu Toggle
    const mobileToggle = document.querySelector(".mobile-toggle");
    const navLinks = document.querySelector(".nav-links");

    mobileToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // 2. GSAP Smooth Page Transitions & Animations
    // Ensure elements are invisible before animation starts
    gsap.set(".page-transition", { opacity: 0 });
    gsap.set(".animate-up", { y: 30, opacity: 0 });

    // Fade in the whole page smoothly
    gsap.to(".page-transition", {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
    });

    // Stagger in the hero elements and cards
    gsap.to(".animate-up", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.2
    });

    // 3. Smooth scrolling for internal links (if added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});