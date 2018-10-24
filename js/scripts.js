$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var str = $("#str").val();
    var vowels = ['a', 'b', 'c', 'e', 'u'];
    var result = [];

    var wordArray = function pigLatin(str) {

       result = str.split(' ');
       console.log(result);

      // if (vowels.includes(str.charAt(0))); {
      //   return str += 'way';
      //
      // }

    }
    wordArray(str);

    $("#result").text(result);

  });
});
