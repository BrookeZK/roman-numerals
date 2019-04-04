//Business Logic
var aye = "I";
var vee = "V";
var ex = "X";
var ell = "L";
var cee = "C";
var dee = "D";
var emm = "M";

var isNumOnethruThree = function(userInput) {
  if (userInput === 1) {
    return aye;
  } else if (userInput < 4) {
    return aye.repeat(userInput);
  }
};
console.log(isNumOnethruThree(1));
console.log(isNumOnethruThree(2));
console.log(isNumOnethruThree(3));
console.log(isNumOnethruThree(4));

var isNumFourThruEight = function(userInput) {
  if (userInput === 4 ) {
    return aye + vee;
  } else if (userInput < 9) {
    var num = userInput - 5;
    return vee + aye.repeat(num);
  } else {
    return false
  }
}

console.log(isNumFourThruEight(4));
console.log(isNumFourThruEight(5));
console.log(isNumFourThruEight(6));
console.log(isNumFourThruEight(7));
console.log(isNumFourThruEight(8));
console.log(isNumFourThruEight(9));

var ifNumNinethruFifteen = function(userInput) {
  if (userInput === 9 ) {
    return aye + ex;
  } else if (userInput < 14) {
    var num = userInput - 10;
    return ex + aye.repeat(num);
  } else {
    return false
  }
}

console.log(ifNumNinethruFifteen(9));
console.log(ifNumNinethruFifteen(10));
console.log(ifNumNinethruFifteen(11));
console.log(ifNumNinethruFifteen(12));
console.log(ifNumNinethruFifteen(13));
console.log(ifNumNinethruFifteen(14));

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
