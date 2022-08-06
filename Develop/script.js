// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//arrays
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var  lowerCase = alphabet.split("");
// console.log(lowerCase);
var upperCase = alphabet.toUpperCase().split("");
// console.log(upperCase);
var numbers = [0,1,2,3,4,5,6,7,8,9] ;
var characters = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~',"'"];

var finalPassL = [];
var finalPassU = [];
var finalPassNum = [];
var finalPassSp = [];
var finalPass = [];

generatePassword = function() {

//confirm for lowercase, Uppercase, Numeric and Special characters
var lowCase = window.confirm("Do you want lowercase letters?")
    if(lowCase){
    finalPass = finalPassL.concat(lowerCase);
    console.log(finalPass);
    //Lower case added
    var upCase = window.confirm("Do you want uppercase Letters?");
      if (upCase){
      finalPass = finalPassU.concat(upperCase);
      console.log(finalPass);
    } //Numbers added
    var numVal = window.confirm("Do you want Numbers?");
      if (numVal){
      finalPass = finalPassNum.concat(numbers);
      console.log(finalPass);
    }//Special Characters
    var spChar = window.confirm("Do you want special Characters?");
    if (spChar){
    finalPass = finalPassSp.concat(characters);
    console.log(finalPass + "~");
    }
    //upper case added without lowerCase
    else if(!lowCase) {
      var upCase = window.confirm("Do you want uppercase Letters?");
      if (upCase){
      finalPass = finalPassU.concat(upperCase);
      console.log(finalPass);

      } 
    //numbers added without upperCase
    else if(!upCase) {
      var numVal = window.confirm("Do you want Numbers?");
      if (numVal){
      finalPass = finalPassNum.concat(numbers);
      console.log(finalPass);

      } 
    
    else if(!numVal) {
      var spChar = window.confirm("Do you want special Characters?");
      if (spChar){
      finalPass = finalPassSp.concat(characters);
      console.log(finalPass + "~");
      } 
    
  }     
  }
  }
}
}