// Theme
let myTheme = localStorage.getItem("theme");
const modeIcon = document.getElementById("modeIcon");

const enableDarkMode = () => {
  document.body.classList.add("dark-theme");
  modeIcon.innerHTML = `<img src="./images/bulb_icon.png" alt="bulb" class="dark-img"/>`;
  localStorage.setItem("theme", "dark");
};

const disableDarkMode = () => {
  document.body.classList.remove("dark-theme");
  modeIcon.innerHTML = `<img src="./images/light_bulb_icon.png" alt="bulb"/>`;
  localStorage.setItem("theme", null);
};

if (myTheme === "dark") {
  enableDarkMode();
}
if (myTheme !== "dark") {
  disableDarkMode();
}

modeIcon.addEventListener("click", () => {
  myTheme = localStorage.getItem("theme");
  if (myTheme !== "dark") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

//   hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// When a link is press it should closed the hamburger so we use this code \/
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Carousel
window.addEventListener("load", function () {
  SlideShow(slidePosition);
  console.log("lol");
});

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow((slidePosition += n));
}

//  images controls
function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}

// About

function readFunction() {
  const dots = document.getElementById("readDots");
  const moreText = document.getElementById("readMore");
  const readMoreBtn = document.getElementById("ReadButton");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMoreBtn.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    readMoreBtn.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
