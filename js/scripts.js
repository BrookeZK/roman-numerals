//Business Logic
var isNumOnethruThree = function(userInput) {
  if (userInput === 1) {
    userInput = "I"
    return userInput;
  } else if (userInput < 4) {
    var userInputNum = userInput
    userInput = "I"
    userInput = userInput.repeat(userInputNum);
    return userInput;
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
