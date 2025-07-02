// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Fade-in animation on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
});

document.querySelectorAll(".feature, .tier").forEach(el => observer.observe(el));

// Button alert
document.querySelector(".btn").addEventListener("click", () => {
  alert("Welcome to SkapSec! Let’s secure your world.");
});
