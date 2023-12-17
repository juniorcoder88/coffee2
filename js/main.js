let btn = document.querySelector(".fa-bars");
let nav = document.querySelector("nav");
// let header = document.querySelector("header .container");

btn.onclick = function () {
  console.log("0000");
  nav.classList.toggle("active");
  // header.classList.toggle("active");
};
nav.onclick = function () {
  nav.classList.remove("active");
};
// =======================>>
