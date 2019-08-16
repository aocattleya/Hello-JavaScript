"use strict";

for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("box");
  div.textContent = i;
  div.addEventListener("click", function() {
    div.classList.toggle("circle");
  });

  document.body.appendChild(div);
}
