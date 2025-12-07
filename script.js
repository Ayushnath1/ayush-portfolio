// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav-link")) {
      navLinks.classList.remove("show");
    }
  });
}

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const height = current.offsetHeight;
    const top = current.offsetTop - 90;
    const id = current.getAttribute("id");

    if (scrollY > top && scrollY <= top + height) {
      links.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Scroll reveal animation
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));
