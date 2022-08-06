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
var lowerCase = alphabet.split("");
// console.log(lowerCase);
var upperCase = alphabet.toUpperCase().split("");
// console.log(upperCase);
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = ["!", '"', "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", "'"];

var passChoices = [];

generatePassword = function () {
  //resets passChoices
  passChoices = [];

  //confirm for lowercase, Uppercase, Numeric and Special characters
  var lowCase = window.confirm("Do you want lowercase letters?");
  var upCase = window.confirm("Do you want uppercase Letters?");
  var numVal = window.confirm("Do you want Numbers?");
  var spChar = window.confirm("Do you want special Characters?");

  //Lower case added
  if (lowCase) {
    passChoices = passChoices.concat(lowerCase);
  }
  //Upper case added
  if (upCase) {
    passChoices = passChoices.concat(upperCase);
  }
  //Numbers added
  if (numVal) {
    passChoices = passChoices.concat(numbers);
  }
  //Special Characters added
  if (spChar) {
    passChoices = passChoices.concat(characters);
  }
  if (!lowCase && !upCase && !numVal && !spChar) {
    return window.alert("You must select one option.");
  }

  //Set Password Length
  var passwordLength = window.prompt("How long should the password be? (8-128)");

  if (passwordLength < 8 || passwordLength > 128) {
    return window.alert("Should've chosen between 8-128. Not " + passwordLength + " !");
  }

  var finalPass = [];

  //radomize password
  for (passwordLength; passwordLength > 0; passwordLength--) {
    finalPass.push(passChoices[Math.floor(Math.random() * passChoices.length)]);
  }

  //send the passwod to display
  return finalPass.join("");
};
