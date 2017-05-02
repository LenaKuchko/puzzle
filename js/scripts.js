var levelOne = ["The weather is so nice", "We love JavaScript", "JavaScript is amazing"];
var levelTwo = ["Pirates belong to the sea", "Turtles are supreme beings", "Quick frozen fox jumps over the lazy dog" ];
var index, str;
var levelThree = ["Sailors sail sailboats", "Good greetings to you", "We know who you are"];
var score = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function replaceVowel (sentence) {
 var vowel = ["a", "e", "o", "y", "i", "u"];
 var arrSent = sentence.split("");
 for (var i = 0; i < vowel.length; i++) {
   for (var j = 0; j < sentence.length; j++) {
     if (arrSent[j]==vowel[i]) {
       arrSent[j]="-";
     }
   }
 }
  return output = arrSent.join('');
}
var getString = (function (array) {
  $("#puzzle").text(replaceVowel(array[index]));
  return array[index];
});

$(function () {
  $("#start").click(function () {
    index = getRandomInt(0,3);
    str = getString(levelOne);

    $("#start").hide();
  });

  $("#form").submit(function (event) {
    index = getRandomInt(0,3);
    console.log(index);
    debugger;
    if (score<0) {
      score = 0;
      console.log(score);
    }
      if (score==0) {
        str = getString(levelOne)
      } else if (score>0 && score<=6) {
        str = getString(levelTwo)
      } else {
        str = getString(levelThree)
      };

    var input = $("#input").val();
    if (str !== input) {
      score--;
      console.log(str);
      console.log(score);
      console.log("wrong");
    } else {
      score+=3;
      console.log(score);
      console.log("correct");

    }
    event.preventDefault();
  });
});
