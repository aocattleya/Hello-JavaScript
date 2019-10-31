window.addEventListener("load", function() {
  let btn = document.querySelector("button");
  btn.addEventListener("click", function() {
    console.log("Hello world");
  });

  let btn2 = document.querySelector("#Button2");
  let changeText = document.querySelector("p");
  btn2.addEventListener("click", function() {
    changeText.innerHTML = "変更されました";
  });

  let btn3 = document.querySelector("#Button3");
  btn3.addEventListener("click", function() {
    changeText.classList.add("red");
    // console.log(changeText.classList);
  });

  // Button4を取得して、変数で定義
  let btn4 = document.querySelector("#Button4");
  // div要素を取得して、変数で定義
  let obj = document.querySelector("div");
  // クラス削除を押したらblueクラスが削除される

  btn4.addEventListener("click", function() {
    obj.classList.remove("blue");
  });
});
