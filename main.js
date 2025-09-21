// Select elements
let img = document.querySelector(".image");
let container = document.querySelector(".container");
let nav = document.getElementById("nav");
let menu = document.getElementById("menu");

// Restore saved background color and image from localStorage on page load
window.onload = function () {
  const storedColor = localStorage.getItem("backgroundColor");
  const storedImage = localStorage.getItem("phoneImage");

  if (storedColor) {
    container.style.backgroundColor = storedColor;
  }

  if (storedImage) {
    img.src = storedImage;
  }
};

// Save selected phone image
function phones(phone) {
  localStorage.setItem("phoneImage", phone);
}

// Save selected background color
function colors(color) {
  localStorage.setItem("backgroundColor", color);
  container.style.backgroundColor = color;
}

// Change both phone image and background color, then reload
function changePhoneAndColor(phone, color) {
  phones(phone);
  colors(color);
  setTimeout(() => {
    window.location.reload(); // small delay for animation
  }, 50);
}

// Toggle menu on button click
menu.addEventListener("click", function (event) {
  event.stopPropagation(); // prevent closing when clicking the button itself
  nav.classList.toggle("active");
});

// Close menu when clicking outside of it
document.addEventListener("click", function (event) {
  if (nav.classList.contains("active") && !nav.contains(event.target)) {
    nav.classList.remove("active");
  }
});
