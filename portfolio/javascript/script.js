const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-links");

/*===== GLOBAL NAV MENU =====*/
const navMenu = document.getElementById("nav-links");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav-links a");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK & ANIMATION ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(".nav-links a[href*='" + sectionId + "']");

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      if (sectionsClass) sectionsClass.classList.add("active-link");
      current.classList.add("animate");
    } else {
      if (sectionsClass) sectionsClass.classList.remove("active-link");
      current.classList.remove("animate");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
});

sr.reveal(".hero-text, .about-image, .skills-section h4, .skills-left", {});
sr.reveal(".hero-content, .about-text, .skills-right", { delay: 400 });
sr.reveal(".service-card", { interval: 200 });
sr.reveal(".projects-card", { interval: 200 });
sr.reveal(".contact-form", { interval: 200 });
sr.reveal(".footer-content", { interval: 200 });
