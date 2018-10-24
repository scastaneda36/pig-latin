var vowels = ['a', 'b', 'c', 'e', 'u'];
var result = "";

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var str = $("#str").val();

      if (vowels.includes(str.charAt(0))) {
        result += str + "way";
      }
    $("#result").text(result);

  });
});
