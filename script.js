const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");
const websiteName = document.querySelector(".website-name");
const heaader = document.querySelector(".header-container");

if (innerWidth < 715) {
  nav.classList.remove("active");
}

function toggleClass() {
  if (innerWidth < 715) {
    nav.classList.remove("active");
    websiteName.classList.remove("inactive");
  } else {
    nav.classList.add("active");
  }
}

window.addEventListener("resize", toggleClass);

setInterval(() => {
  heaader.classList.toggle("active");
}, 700);

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  if (nav.classList.contains("active") && innerWidth < 715) {
    websiteName.classList.add("inactive");
  } else {
    websiteName.classList.remove("inactive");
  }
});
