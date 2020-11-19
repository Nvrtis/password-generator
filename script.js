var passwordLength = parseInt(prompt("Please enter a number between 8 - 128", "8-128"))

while (passwordLength < 8 ||
    passwordLength >128 ) {
        passwordLength = parseInt(prompt("Please try again. \n Enter a number between 8 - 128", "8-128"))  
    }
var criteriaLowerCase = confirm ("Please enter lower case letter", "abcdefghijklmnopqrstuvwxyz" )



var criteriaUpperCase = confirm ("Please enter lower case letter", "abcdefghijklmnopqrstuvwxyz" )

var criteriaNumeric = confirm ("Please enter numbers", "0123456789" )

var criteriaSpecial = confirm ("Please enter special signs", "~`!@#$%^&*()-_+={}[]|\\/:;\’/\"’<>,.?" )


// click a button and then are presented with a prompt, which as the user for length of passwordf (8-128 char)
// after entering the number, the user will get a confirm to ask the user wants to have lowercase characters in password.
  // if user clicks ok then user gets to add some lowercase character in a prompt
// after the user either accept or cancel lowercase character, the user will recieve a new confirm, where it ask the user wants to add any uppercase characters in the password
  //if user press ok then user gets to add some uppercase character in password
//after the user confirms or cancel the confirm () the user will recieve a new confirm if the user wants to have numeric (numbers) in the password
  //if user press ok then user gets to add some numbers in password
//after the user confirms or cancel the confirm () the user will recieve a new confirm if the user wants to have special characters in the password
  // if user pressed ok then user will get a prompt where the user can add what special character they can add
  // if user have not pressed ok on any prompts, the password will not be generated, and a alert will show up and inform the user will have to retry and add a criteria in the password generator
  //   if the user accepted criterias, but added no characters, then the user will recieve a prompt if the user wants a total random password with criterias 
// if user have not added enough characters for the password, the user will be prompted to press ok to randomise the last character or will have to retyr the password generator
// the prompts will have to validate the results, choose atleast two character from each criteria or more to add in the generated password
// password is then shown as a alert or written as a text on the html document 

// when the user clicks the password generator button, the user should be prompted with a prompt which will create a (object?)
// each criteria should be a property/key and the user prompt will be the characters in the array, (can user add several items in a prompt to push in a array?).
// the end result should be the randomiser choosing an order of when the criteria should be first and randomise the index of the properties