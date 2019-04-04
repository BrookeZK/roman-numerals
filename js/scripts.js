//Business Logic
var isNumOnethruThree = function(userInput) {
  var romanNumeral = "I"
  if (userInput === 1) {
    return romanNumeral;
  } else if (userInput < 4) {
    // var userInputNum = userInput
    // userInput = "I"
    romanNumeral = romanNumeral.repeat(userInput);
    return romanNumeral;
  } else {
    return false;
  }
};
console.log(isNumOnethruThree(4));





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
