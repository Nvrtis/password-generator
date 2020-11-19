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

 
generateBtn.onclick = function () {
  var passwordLength = parseInt(prompt("Please enter a number between 8 - 128", "8-128"))

while (passwordLength < 8 ||
    passwordLength >128 ) {
        passwordLength = parseInt(prompt("Please try again. \n Enter a number between 8 - 128", "8-128")) 
        console.log (passwordLength) 
    }
if (passwordLength >= 8 && passwordLength <= 128) {
  var criteriaLowerCase = confirm ("Please press OK if you want to enter lower case letter in password")}

  if (criteriaLowerCase === true) { 
    var LowerCase = prompt("Please enter your lowercase letters", "abcdefghijklmnopqrstuvwxyz")
  } 
  else {
    var criteriaUpperCase = confirm ("Please enter lower case letter", "ABCDEFGHIJKLMNOPQRSTUVWXYZ" )
  }

  if (LowerCase === //string of lowercase letters
    ) 
    {var criteriaUpperCase = confirm ("Please press OK if you want to enter upper case letter in password" )}

    if (criteriaUpperCase === true) {
      var upperCase = prompt("Please enter your uppercase letters", "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  } 
  else {
    var criteriaNumeric = confirm ("Please enter numbers", "0123456789" )
  }

  if (upperCase === //string of uppercase letters
    ) 
    {var criteriaNumeric = confirm ("Please press OK if you want to enter numbers in password" )}

    if (criteriaUpperCase === true) {
      var upperCase = prompt("Please enter your numbers", "0123456789")
  } 
  else {
    var criteriaSpecial = confirm ("Please enter special signs", "~`!@#$%^&*()-_+={}[]|\\/:;\’/\"’<>,.?" ) )
  }

  if (upperCase === Number
    ) 
    {var criteriaSpecial = confirm ("Please press OK if you want to enter special signs in password" )}

    var criteriaSpecial = prompt ("Please enter special signs", "~`!@#$%^&*()-_+={}[]|\\/:;\’/\"’<>,.?" )
  } 
  // else {
  //   var criteriaSpecial = confirm ("Please enter special signs", "~`!@#$%^&*()-_+={}[]|\\/:;\’/\"’<>,.?") )
  // }

