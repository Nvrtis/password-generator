
var charcount = parseInt(prompt("Please enter a number between 8 - 128", "8-128"))

if(charcount >7 && charcount <= 128) {

  var finalchars=[]

  var includenumber = confirm('password should include number?')
  var includesymbols = confirm('password should include symbols?')

  if (includenumber) {
    for (var i = 0; numericNumber.length;++i)
finalchars.push (numericNumber[i])
  }
  if (includenumber) {
    for (var i = 0; numericNumber.length;++i)
    finalchars.push (specialChar[i])
  }

  var flattenFinalChars = finalchars.flat()
var password = ''


  for (var i = 0; charcount;++i) {
    var randomIndex = math.floor (math.random() * flattenFinalChar.length)
  }
    var randomChar = flattenedFinalChars[randomIndex]

    password += randomchar
}
// Criterias

//   if (passwordLength < 8 ||
//     passwordLength > 128) {
//     passwordLength = parseInt(prompt("Please try again. \n Enter a number between 8 - 128", "8-128"))
//   }
// var criteriaLowerCase = confirm("Please press OK if you want to enter lower case letter in password")

// var criteriaUpperCase = confirm("Please press OK if you want to enter upper case letter in password")
  
// var criteriaNumeric = confirm("Please press OK if you want to enter numbers in password")

// var criteriaSpecial = confirm("Please press OK if you want to enter special signs in password")}

// if (criteriaLowerCase, criteriaUpperCase, criteriaNumeric,criteriaSpecial===false) {alert ("Your password needs one criteria")}

// passwordLength

// for(var i = 8, i < function().passwordLength ; i++ )
  // if (criteriaLowerCase===true)


// click a button and then are presented with a prompt, which as the user for length of passwordf (8-128 char)
// after entering the number, the user will get a confirm to ask the user wants to have lowercase characters in password.
  // if user clicks ok then user will recieve lowercase letters in password (atleast 1)
// after the user either accept or cancel lowercase character, the user will recieve a new confirm, where it ask the user wants to add any uppercase characters in the password
  //if user clicks ok then user will recieve uppercase letters in password (atleast 1)
//after the user confirms or cancel the confirm () the user will recieve a new confirm if the user wants to have numeric (numbers) in the password
  //if user press ok then user gets some numbers in password
//after the user confirms or cancel the confirm () the user will recieve a new confirm if the user wants to have special characters in the password
  // if user pressed ok then user will getsome special character in their password
  // if user have not pressed ok on any prompts, the password will not be generated, and a alert will show up and inform the user 
// the prompts will have to validate the results, choose atleast two character from each criteria or more to add in the generated password
// password is then shown as a alert or written as a text on the html document 