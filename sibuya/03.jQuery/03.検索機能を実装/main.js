var fruits = [
  "apple",
  "apricot",
  "avocado",
  "blueberry",
  "cherry",
  "coconut",
  "cranberry",
  "dragonfruit",
  "durian",
  "grape",
  "grapefruit",
  "guava",
  "kiwi fruit",
  "lemon",
  "lime",
  "lychee",
  "mango",
  "melon",
  "watermelon",
  "miracle fruit",
  "orange",
  "bloodorange",
  "clementine",
  "mandarine",
  "tangerine",
  "papaya",
  "passionfruit",
  "peach",
  "pear",
  "persimmon",
  "physalis",
  "plum/prune",
  "pineapple",
  "pomegranate",
  "raspberry",
  "rambutan",
  "star fruit",
  "strawberry"
];

/*
$(function() {
  $("#submit").on("click", function() {
    let input = $("#keyword").val();
    $.each(fruits, function(i, fruit) {
      if (input === fruit) {
        $("#result").text(input);
        return false;
      } else {
        $("#result").text("一致する物がありませんでした。");
      }
    });
  });
});
*/

$(function() {
  // id名がlistを取得し、変数に格納
  let list = $("#list")

  // append()を使って、listに値を出力するappendList(word)関数としてまとめる
  function appendList(word) {
    // 処理
    let item = $('<li class="list">').append(word);
    list.append(item);
  }

  function editElement(element) {
    let result = "^" + element;
    return result;
  }

  $("#submit").on("click", function() {
    let input = $("#keyword").val();
    // 正規表現オブジェクトを生成し、変数に格納する
    let inputs = input.split(" ");
    let newInputs = inputs.map(editElement);
    console.log(newInputs);
    let reg = RegExp(newInputs.join("|"));
    // let reg = new RegExp("^" + input);

    // listクラスを取り除く
    $(".list").remove();

    $.each(fruits, function(i, fruit) {
      // fruitとマッチしたらlistクラスに出力する
      if (fruit.match(reg)) {
        appendList(fruit);
      }
    });

    if ($(".list").length === 0) {
      appendList("一致する果物はありませんでした");
    }
  });
});