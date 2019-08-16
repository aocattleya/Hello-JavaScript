"use strict";

const num = 5;
const winner = Math.floor(Math.random() * num); // 0-4

for (let i = 0; i < num; i++) {
  const div = document.createElement("div");
  div.classList.add("box");
  if (i === winner) {
    div.dataset.result = "win";
  } else {
    div.dataset.result = "lose";
  }
  
  div.addEventListener("click", function() {
    if (div.dataset.result === "win") {
      div.textContent = "win!";
      div.classList.add("win");
    } else {
      div.textContent = "lose!";
      div.classList.add("lose");
    }
  });

  document.body.appendChild(div);
}
