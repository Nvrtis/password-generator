
// Var list
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var numericNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = ['#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '['];

// password generator
function generatePassword() {
  var charcount = parseInt(prompt("Please enter a number between 8 - 128", "8-128"))
// limits users input on password length
if(charcount >7 && charcount <= 128) {
  // pushes all var the users chooses, into 1 var
  var finalchars=[]
  // Criterias
  var includeLowerC = confirm ('Would you want lower case letter in your password?')
  var includeUpperC = confirm ('Would you want upper case letter in your password?')
  var includenumber = confirm('Would you want numbers in your password?')
  var includesymbols = confirm('Would you want symbols in your password?')
// need to include one criteria
if (includeLowerC=== false && includeUpperC=== false && includenumber=== false && includesymbols === false) {
  alert('You need to pick atleast one criteria \n Please try again')}

  // pushes the included criterias into the finalchars var
  if (includeLowerC===true) {
    for (var i = 0;i < lowerCaseChar.length;++i)
finalchars.push (lowerCaseChar[i])
  }
  if (includeUpperC===true) {
    for (var i = 0;i < upperCaseChar.length;++i)
    finalchars.push (upperCaseChar[i])
  }
  if (includenumber===true) {
    for (var i = 0;i < numericNumber.length;++i)
finalchars.push (numericNumber[i])
  }
  if (includesymbols===true) {
    for (var i = 0;i < specialChar.length;++i)
    finalchars.push (specialChar[i])
  }
// avoids getting arrarys inside of arrays
  var flattenFinalChars = finalchars.flat()
// getting password to become as string
  var finalpassword = ''
// getting random number if the chosen criterias
  for (var i = 0; charcount;++i) {
    var randomIndex = Math.floor(Math.random() * flattenFinalChars.length)
  }
    var randomChar = flattenedFinalChars[randomIndex]

    finalpassword += randomChar
    alert (finalpassword)
}
else {alert("Please input a number between 8-128")}
}

// need to figure out why it is crashing ( is the problem between line 45-55/62-67)
// need to figure out how to limit users password to the length of the input
// need to figure out how to make atleast 1 char from each chosen criteria to appear in the password
// i believe line 69 will make the password variable appear as a text in the website, need to make sure


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // password = generatePassword.finalpassword
  var passwordText = document.querySelector("#password");
  passwordText.inntertext = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//  run 3

// make a function that will run after click the generate password button that get the user to input the length of password (8-128)


// when the user accept certain criterias, they will be randomly added atleast 1 character from each criteria

// the password will then be written in the textbox on site

// how to make the users input become the length of password??

// make a function that will run the radomiser if the criteria is true?

// make the input of the randomiser to randomise everything in a string which will shown in the text area/ make every character in the password