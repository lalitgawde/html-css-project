const logo = document.getElementById("logo")
const mobileNavIcon = document.getElementById("navIcon");
const closeMenu = document.getElementById("closeMenuIcon");

if (logo) {
  logo.addEventListener("click", (e) => {
    window.location.replace("./index.html");
  })
}

if (mobileNavIcon) {
  mobileNavIcon.addEventListener("click", (e) => {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.replace("mobile_nav_links", "mobile_nav_links_open");
  })
}

if (closeMenu) {
  closeMenu.addEventListener("click", (e) => {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.replace("mobile_nav_links_open", "mobile_nav_links");
  })
}

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let index = 0;

// Update slider to show centered 3 cards
function updateSlider() {
  slides.forEach((slide, i) => {
    const pos = i - index;
    slide.style.transform = `translateX(${pos * 320}px)`;

    slide.classList.toggle("active", pos === 0);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

document.getElementById("next").onclick = () => {
  index = (index + 1) % slides.length;
  updateSlider();
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
};

dots.forEach((dot, i) => {
  dot.onclick = () => {
    index = i;
    updateSlider();
  };
});

// Initialize
updateSlider();


