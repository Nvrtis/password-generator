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

  if (criteriaLowerCase === true) {prompt("Please enter your lowercase letters", "abcdefghijklmnopqrstuvwxyz")

  } 
  
console.log (passwordLength + criteriaLowerCase)
    

}