
  // ===== Form Validation with Alert on Submit =====
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields before submitting.");
      e.preventDefault();
      return;
    }

    const confirmSend = confirm("Are you sure you want to send this message?");
    if (!confirmSend) {
      e.preventDefault();
    }
  });

  // ===== Toggle Menu on Small Screens =====
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

  // ===== Close Menu When Link is Clicked (Mobile) =====
  const navLinks = document.querySelectorAll(".nav-links a");
  const navMenu  = document.getElementById("nav-links");

  function linkAction() {
    navMenu.classList.remove("show");
  }
  navLinks.forEach((link) => link.addEventListener("click", linkAction));

  // ===== Close Mobile Checkbox Menu When Clicking Outside =====
  const menuInput = document.querySelector('.mobile-menu input');
  document.addEventListener('click', function(event) {
    const isClickInside = document.querySelector('.mobile-menu').contains(event.target);
    if (!isClickInside) {
      menuInput.checked = false;
    }
  });

  // ===== Scroll-Based Nav Highlighting =====
  const sections = document.querySelectorAll("section[id]");
  const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 60;
      const sectionId = current.getAttribute("id");
      const link = document.querySelector(`.nav-links a[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link?.classList.add("active-link");
      } else {
        link?.classList.remove("active-link");
      }
    });
  };
  window.addEventListener("scroll", scrollActive);

  // ===== ScrollReveal Animations =====
  const sr = ScrollReveal({
    distance: "60px",
    duration: 1000,
    easing: "ease-in-out",
    reset: false,
  });

  sr.reveal(".hero-text, .about-image, .skills-section h4, .skills-left");
  sr.reveal(".hero-content, .about-text, .skills-right", { delay: 400 });
  sr.reveal(".service-card", { interval: 200 });
  sr.reveal(".projects-card", { interval: 200 });
  sr.reveal(".footer-content", { interval: 200 });
  sr.reveal(".fade-in", { delay: 100 });
  sr.reveal(".sr-fade", {
    origin: "bottom",
    interval: 200,
  });
  sr.reveal(".contact-form-container, .sr-up", {
    origin: "right",
    delay: 300,
  });