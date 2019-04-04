//Business Logic
userInput = 89;
var arabicNum = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
var romanNum = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
var romanNumOutput = "";

for (var i = arabicNum.length-1; i >= 0; i--) {
  while (userInput >= arabicNum[i]) {

    romanNumOutput += romanNum[i];

    userInput -= arabicNum[i];
  }
}

console.log(romanNumOutput);

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
