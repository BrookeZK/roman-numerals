//Business Logic
var isNumOnethruThree = function(userInput) {
  if (userInput === 1) {
    userInput = I;
  }
}





// User Interface Logic
$(document).ready(function(){
  $("#numSwitchForm").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    console.log(userInput);

  });
});
