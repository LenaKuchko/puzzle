var levelOne = ["The weather is so nice", "We love JavaScript", "JavaScript is amazing"];
var levelTwo = ["Pirates belong to the sea", "Turtles are supreme beings", "Quick frozen fox jumps over the lazy dog" ];
var levelThree = ["Sailors sail sailboats", "Good greetings to you", "We know who you are"];
var currentTask;
var score = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function replaceVowel(sentence) {
 var vowel = ["a", "e", "o", "y", "i", "u"];
 var arrSent = sentence.split("");
   for (var i = 0; i < vowel.length; i++) {
     for (var j = 0; j < sentence.length; j++) {
       if (arrSent[j]==vowel[i]) {
         arrSent[j]="-";
       }
     }
   }
  return arrSent.join('');
}

function getRandomTask(score) {
  var index = getRandomInt(0,3);
  if (score<=3) {
    currentTask = levelOne[index];
    return replaceVowel(levelOne[index]);
  } else if (score>3 && score<=7) {
    currentTask = levelTwo[index];
    return replaceVowel(levelTwo[index]);
  } else {
    currentTask = levelThree[index];
    return replaceVowel(Three[index]);
  };
};

function printTask(randomTask) {
  $("#puzzle").text(randomTask);
}

function checkAnswer(input){
  if (currentTask !== input) {
    if (score>0) {score--;}

  } else {
    score+=3;
    console.log(score);
    console.log("correct");

  }
}

$(function () {
  $("#start").click(function () {
    printTask(getRandomTask(score));
    $("#start").hide();
  });

  $("#form").submit(function (event) {

    $("#input").val();


    event.preventDefault();
  });
});
