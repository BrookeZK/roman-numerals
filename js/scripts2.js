//Business Logic
var arabicNum = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
var romanNum = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

var output = function(userInput) {
  var romanNumOutput = "";
  if (userInput < 1 || userInput > 3999){
    alert("Please enter a valid number.");
  }
  for (var i = arabicNum.length-1; i >= 0; i--) {
    while (userInput >= arabicNum[i]) {

      romanNumOutput += romanNum[i];

      userInput -= arabicNum[i];
    }
  }
  return romanNumOutput;
}

// User Interface Logic
$(document).ready(function(){
  $("#numSwitchForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var result = output(userInput);
    $("#romanNumeral").text(result);
  });
});
