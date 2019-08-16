"use strict";

const target1 = document.getElementById("target1");
const target2 = document.getElementById("target2");
const target3 = document.getElementById("target3");

target1.addEventListener("click", function() {
  target1.classList.toggle("circle");
});

target2.addEventListener("click", function() {
  target2.classList.toggle("circle");
});

target3.addEventListener("click", function() {
  target3.classList.toggle("circle");
});

