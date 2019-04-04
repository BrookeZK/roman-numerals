//Business Logic
var isNumOnethruThree = function(userInput) {
  if (userInput === 1) {
    return userInput = "I";
  }
}
// console.log(isNumOnethruThree);




// User Interface Logic
$(document).ready(function(){
  $("#numSwitchForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    console.log(userInput);
    var result = isNumOnethruThree(userInput);
    console.log(result);
  });
});
