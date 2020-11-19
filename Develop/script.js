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

// Var list
var LowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var UpperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var NumericNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var SpecialChar = ['#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '['];

// button click

generateBtn.onclick = function () {
  var passwordLength = parseInt(prompt("Please enter a number between 8 - 128", "8-128"))

// Criterias

  if (passwordLength < 8 ||
    passwordLength > 128) {
    passwordLength = parseInt(prompt("Please try again. \n Enter a number between 8 - 128", "8-128"))
  }
var criteriaLowerCase = confirm("Please press OK if you want to enter lower case letter in password")

var criteriaUpperCase = confirm("Please press OK if you want to enter upper case letter in password")
  
var criteriaNumeric = confirm("Please press OK if you want to enter numbers in password")

var criteriaSpecial = confirm("Please press OK if you want to enter special signs in password")
return}

if (criteriaLowerCase, criteriaUpperCase, criteriaNumeric,criteriaSpecial===false) {alert ("Your password needs one criteria")}

// passwordLength


  // if (criteriaLowerCase===true)