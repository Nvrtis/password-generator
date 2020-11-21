
// Var list
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var numericNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = ['#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '['];

// password generator
function getPwdLength() {
  var charCount = parseInt(prompt("Please enter a number between 8 - 128", "8-128"));
// limits users input on password length
if (isNaN(charCount)===true){
alert("Please input a number!")};
if(charCount <= 7 && charCount > 128) {
  charCount = parseInt(prompt("Please enter a number between 8 - 128", "8-128"));
}
return charCount;};


function getCharSelection() {
  // pushes all var the users chooses, into 1 var
  // Criterias
  var includeLowerC = confirm ('Would you want lower case letter in your password?')
  var includeUpperC = confirm ('Would you want upper case letter in your password?')
  var includenumber = confirm('Would you want numbers in your password?')
  var includesymbols = confirm('Would you want symbols in your password?')
// need to include one criteria
if (includeLowerC=== false && includeUpperC=== false && includenumber=== false && includesymbols === false) {
  alert('You need to pick atleast one criteria \n Please try again')
 return;}

 var finalChars={
   includeLowerC:includeLowerC,
   includeUpperC:includeUpperC,
   includenumber:includenumber,
   includesymbols:includesymbols
 };
return finalChars;
}

function list(array) {
  var picker=Math.floor(Math.random()*array.length);
  var randomChar= array[picker];
  return randomChar;
}

function getCharArray(finalChars) {
  var allTheArrays = []
  // pick the variable types
  // array 
  // if statments: includesymbols
  // // pushes the included criterias into the finalchars var
  if (finalChars.includeLowerC===true) {
    for (var i = 0;i < lowerCaseChar.length;i++)
  allTheArrays.push (lowerCaseChar[i])
  }
  if (finalChars.includeUpperC===true) {
    for (var i = 0;i < upperCaseChar.length;i++)
    allTheArrays.push (upperCaseChar[i])
  }
  if (finalChars.includenumber===true) {
    for (var i = 0;i < numericNumber.length;i++)
    allTheArrays.push (numericNumber[i])
  }
  if (finalChars.includesymbols===true) {
    for (var i = 0;i < specialChar.length;i++)
    allTheArrays.push (specialChar[i])
  }
  return allTheArrays;

}
console.log(getCharArray(getCharSelection()))

function getPassword (charCount) {
var finalpwd = ""
  for(var i = 0;i < charCount.length;i++){
    finalpwd += randomChar (getCharArray(getCharSelection()))
    
  }
  
  return finalpwd;
}

console.log(getPassword(getPwdLength()))

// f
// avoids getting arrarys inside of arrays
  // var flattenFinalChars = finalchars.flat()
// getting password to become as string
  // var finalpassword = ''
// getting random number if the chosen criterias
  // for (var i = 0; charcount;++i) {
  //   var randomIndex = Math.floor(Math.random() * flattenFinalChars.length)
  // }
  //   var randomChar = flattenedFinalChars[randomIndex]

  //   finalpassword += randomChar
  //   alert (finalpassword)

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getPwdLength()
  getCharSelection() 
  var password = getPassword();
  var passwordText = document.querySelector("#password");
  passwordText.inntertext = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
