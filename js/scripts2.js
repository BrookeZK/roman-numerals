//Business Logic

var arabicNum = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
var romanNum = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
var romanNumOutput = "";

for (var i = arabicNum.length-1; i >= 0; i--) {
  while (userInput >= arabicNum) {
    romanNumOutput = userInput.location[i] replaced with arabicNum.location[i];
    userInput - arabicNum
  }
}

// User Interface Logic
$(document).ready(function(){
  $("#numSwitchForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    console.log(userInput);
    var result = isNumOnethruThree(userInput);
    console.log(result);
    $("#romanNumeral").text(result);
  });
});
