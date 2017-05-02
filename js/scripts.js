var str ="Everybody knows that the turtle is the supreme being of this universe."
var replaceVowel = function  (sentence) {
 var vowel = ["a", "e", "o", "y", "i", "u"];
 var arrSent = sentence.split("");
 for (var i = 0; i < vowel.length; i++) {
   for (var j = 0; j < sentence.length; j++) {
     if (arrSent[j]==vowel[i]) {
       arrSent[j]="-";
     }
   }
 }
 var str1 = arrSent.join('');
 return str1;
}

$(function () {
  $("#puzzle").text(replaceVowel(str));

  $("#form").submit(function (event) {
    var input = $("#input").val();
    if (str !== input) {
      alert("Try again!");
    } else {
      alert("Fuck yeah! You're awesome!")
    }
    event.preventDefault();
  });
});
