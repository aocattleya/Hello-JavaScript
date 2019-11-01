# ID セレクタ

```js
$("#idSelector");
// idがidSelectorの要素を取得
```

# クラスセレクタ

```js
$(".classSelector");
// classがclassSelectorの要素をすべて取得
```

# 要素セレクタ

```js
$("h1");
// h1要素をすべて取得
```

# 属性セレクタ

```js
$("input[ type='radio' ]");
// <input type="radio">のHTML要素を取得する
```

# removeClass()

```js
$(".active").removeClass("active");
```

# index()

```js
index("セレクタ");
// セレクタと一致したDOMの要素番号を戻す
```

# eq()

```js
eq();
// セレクタと一致したDOMの要素番号を戻す
```

# submit

フォームが送信される時に呼び出されるイベント

```js
$(function() {
  $("form").on("submit", function() {
    console.log("送信ボタンが押されました");
  });
});
```

# find("セレクタ")

引数にセレクタを指定して、合致するセレクタを全て取得

```js
$(function() {
  $("form").on("submit", function(e) {
    let checkboxes = $(this).find('input[type="checkbox"]');

    e.preventDefault();
    alert("あなたが選んだ果物:\n" + checkboxes);
  });
});
```
