window.addEventListener("load", function() {
  let btn = document.querySelector("button");
  btn.addEventListener("click", function() {
    console.log("Hello world");
  });

  // テキストの要素を取得し、変数で定義
  let btn2 = document.querySelector("#Button2");
  let changeText = document.querySelector("p");

  // ボタン2をクリックしたらテキストが置換される
  btn2.addEventListener("click", function() {
    changeText.innerHTML = "変更されました";
  });
});
