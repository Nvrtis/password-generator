
// Var list
var lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

var numericNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = ['#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '['];

var selectedNumber; 

var finalArray=[]

// users pwd length
function getPwdLength() {
 var charCount = parseInt(prompt("Please enter a number between 8 - 128", "8-128"));
if (isNaN(charCount)===true){
alert("Please input a number!")};
if(charCount <= 7 || charCount > 128) {
  charCount = parseInt(prompt("Please enter a number between 8 - 128", "8-128"));
}
selectedNumber=charCount;};

// criterias
function getCharSelection() {
  var includeLowerC = confirm ('Would you want lower case letter in your password?')
  var includeUpperC = confirm ('Would you want upper case letter in your password?')
  var includenumber = confirm('Would you want numbers in your password?')
  var includesymbols = confirm('Would you want symbols in your password?')
// need to include one criteria
if (includeLowerC=== false && includeUpperC=== false && includenumber=== false && includesymbols === false) {
  alert('You need to pick atleast one criteria \n Please try again')
 return;}
// storage of Criteria
 var finalChars={
   includeLowerC:includeLowerC,
   includeUpperC:includeUpperC,
   includenumber:includenumber,
   includesymbols:includesymbols
 };
 
return finalChars;
}
// radomiser
function randomPicker(array) {
  var picker=Math.floor(Math.random()*array.length);
  var randomChar= array[picker];
  return randomChar;
}
// Generating final array with all the criterias
function getCharArray(finalChars) {
  var allTheArrays = []
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
  console.log(allTheArrays)
  finalArray=allTheArrays;

}
// Gets password from array
function getPassword (charCount) {
  console.log(finalArray)
var finalpwd = ""
  for(var i = 0;i < charCount;i++){
    finalpwd += randomPicker (finalArray)
  }
  return finalpwd;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getPwdLength()
  getCharArray(getCharSelection())
  var password = getPassword(selectedNumber);
  var passwordText = document.querySelector("#password");
  passwordText.innerText = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
