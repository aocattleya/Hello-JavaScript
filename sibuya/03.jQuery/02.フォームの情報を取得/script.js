$(function() {
  // $("form").on("submit", function() {
  // console.log("送信ボタンが押されました");
  // });

  //   $("form").on("submit", function(e) {
  //     console.log("送信ボタンが押されました");
  //     e.preventDefault();
  //   });
  // });

  $("form").on("submit", function(e) {
    let output = "";
    let checkboxes = $(this).find('input[type="checkbox"]');
    checkboxes.each(function(i, checkbox) {
      checkbox = $(checkboxes[i]);
      if (checkbox.prop("checked")) {
        output += checkbox.attr("value") + "\n";
      }
    });
    e.preventDefault();
    alert("あなたが選んだ果物:\n" + output);
  });
});
