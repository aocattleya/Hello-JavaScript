$(function() {
  // タブのDOM要素を取得し、変数で定義
  let tabs = $(".menu_item");
  // tabsを配列に変換する
  tabsAry = Array.prototype.slice.call(tabs);

  // クラスの切り替えをtabSwitch関数で定義
  function tabSwitch() {
    // 全てのactiveクラスのうち、最初の要素を削除（"[0]は、最初の要素の意味"）
    $(".active").removeClass("active");

    // クリックしたタブにactiveクラスを追加
    $(this).addClass("active");

    // コンテンツの全てのshowクラスのうち、最初の要素を削除
    $(".show").removeClass("show");

    // 何番目の要素がクリックされたかを、配列tabsから要素番号を取得
    // const index = tabsAry.indexOf(this);
    const index = tabs.index(this);

    // クリックしたcoutentクラスにshowクラスを追加する
    // $(".content")[index].classList.add("show");
    $(".content")
      .removeClass("show")
      .eq(index)
      .addClass("show");
  }

  // タブメニューの中でクリックイベントが発生した場所を探し、下で定義したtabSwitch関数を呼び出す
  tabs.click(tabSwitch);
});
