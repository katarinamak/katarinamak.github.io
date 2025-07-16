// script.js

// Recalculate which section is in view
function updateActiveNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar ul li a");
  
    let currentSectionId = "";
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 160;
      const sectionHeight = section.offsetHeight;
  
      if (
        window.pageYOffset >= sectionTop &&
        window.pageYOffset < sectionTop + sectionHeight
      ) {
        currentSectionId = section.getAttribute("id");
      }
    });
  
    // If scrolled to bottom, force last section active
    if (
      window.innerHeight + window.pageYOffset >=
      document.body.offsetHeight - 2
    ) {
      currentSectionId = "blog";
    }
  
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  }
  
  // Smooth scrolling and updating nav on click
  document.querySelectorAll(".navbar ul li a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);
      const offsetTop = targetSection.offsetTop - 160; 
  
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
  
      // Immediately update highlighting
      setTimeout(updateActiveNav, 200);
    });
  });
  
  // Also update highlighting on scroll
  window.addEventListener("scroll", updateActiveNav);

  // script.js
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // animate only once
      }
    });
  }, {
    threshold: 0.1
  });
  
  // Observe all fade-in sections
  document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
  });
  
  