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
  //confirm for lowercase, Uppercase, Numeric and Special characters
  var lowCase = window.confirm("Do you want lowercase letters?");
  if (lowCase) {
    passChoices = passChoices.concat(lowerCase);
    //Lower case added

    var upCase = window.confirm("Do you want uppercase Letters?");
    if (upCase) {
      passChoices = passChoices.concat(upperCase);
    } //Numbers added
    var numVal = window.confirm("Do you want Numbers?");
    if (numVal) {
      passChoices = passChoices.concat(numbers);
    } //Special Characters
    var spChar = window.confirm("Do you want special Characters?");
    if (spChar) {
      passChoices = passChoices.concat(characters);
    }
  }
  //upper case added without lowerCase
  else if (!lowCase) {
    var upCase = window.confirm("Do you want uppercase Letters?");
    if (upCase) {
      passChoices = passChoices.concat(upperCase);
    }
    //numbers added without upperCase
    else if (!upCase) {
      var numVal = window.confirm("Do you want Numbers?");
      if (numVal) {
        passChoices = passChoices.concat(numbers);
      }
      //special characters added without numbers
      else if (!numVal) {
        var spChar = window.confirm("Do you want special Characters?");
        if (spChar) {
          passChoices = passChoices.concat(characters);
        }
      }
    }
  }
  //Set Password Length
  var passwordLength = window.prompt("How long should the password be? (8-128)");

  if (passwordLength > 7 && passwordLength < 129) {
    console.log(passwordLength);
  } else {
    window.alert("Should've chosen between 8-128. Not " + passwordLength + " !");
    return;
  }
  var finalPass = [];

  //radomize password
  for (passwordLength; passwordLength > 0; passwordLength--) {
    finalPass.push(passChoices[Math.floor(Math.random() * passChoices.length)]);
  }

  //send the passwod to display
  return finalPass.join("");
};
