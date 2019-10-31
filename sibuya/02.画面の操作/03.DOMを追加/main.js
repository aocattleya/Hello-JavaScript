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

  // Button3を取得して、変数で定義
  let btn3 = document.querySelector("#Button3");

  // クラス追加を押したらredクラスが追加される
  btn3.addEventListener("click", function() {
    changeText.classList.add("red");
    console.log(changeText.classList);
  });
});
