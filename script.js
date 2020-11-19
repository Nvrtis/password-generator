var generatePasswordButton = document.getElementById("generate");
var copyToClipBoardButton = document.getElementById("copytoclipboard");

var onlyUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var onlyLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var onlySpecial = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var onlyNumeric = [0,1,2,3,4,5,6,7,8,9];


function generateOptions() {

    //create variable for user input
    //var userInput = prompt('How many characters would you like your password to contain?');

    //if less than 8 characters
    //if (userInput <= 8) {
    //alert('Password must be at least 8 characters');
    //}

    //if more than 128 characters
    //if (userInput >= 128) {
    //alert('Password must be less than 128 characters');
    //}

    //prompt user for at least 8 characters
    var length = parseInt(prompt("How many characters would you like your password to contain?"));

    //loop userInput question
    // for (var i = userInput; userInput < 8 || userInput > 128; userInput = prompt('How many characters would you like your password to contain?')) {
    //     alert('Password must be at least 8 characters but less than 128 characters');
    // }

    if (length < 8) {
        alert('The password must be at least 8 characters!');
        return;
    }
    if (length > 128) {
        alert('The password must be less than 128 characters!');
        return;
    }

    //prompt user for special characters
    var shouldIncludeSpecialCharacters = confirm("Do you want to include special characters?");
    
    //prompt user for numeric characters
    var shouldIncludeNumeric = confirm("Do you want to include numeric characters?");
    
    //prompt user for lowercase characters
    var shouldIncludeLowercase = confirm("Do you want to include lowercase characters?");
    
    //prompt user for uppercase characters
    var shouldIncludeUppercase = confirm("Do you want to include uppercase characters?");
    
    if (!shouldIncludeLowercase && !shouldIncludeUppercase && !shouldIncludeNumeric && !shouldIncludeSpecialCharacters) {
        alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
        return;
    }

    var questionOptions = {
        length: length,
        specialCharacters: shouldIncludeSpecialCharacters,
        numeric: shouldIncludeNumeric,
        lowerCase: shouldIncludeLowercase,
        upperCase: shouldIncludeUppercase
    }

    return questionOptions;

}

function generatePassword() {

    var options = generateOptions();
    console.log(options)

    var passwordPool = [];
    console.log(passwordPool)

    if (options.specialCharacters) {
        for (i = 0; i < onlySpecial.length; ++i) {
            passwordPool.push(onlySpecial[i]);
        }
    } 
    if (options.numeric) {
        for (i = 0; i < onlyNumeric.length; ++i) {
        passwordPool.push(onlyNumeric[i]);
        }
    }
    if (options.lowerCase) {
        for (i = 0; i < onlyLower.length; ++i) {
        passwordPool.push(onlyLower[i]);
        }
    }
    if (options.upperCase) {
        for (i = 0; i < onlyUpper.length; ++i) {
        passwordPool.push(onlyUpper[i]);
        }
    }

    var finalPassword = [];

    for (let i = 0; i < options.length; ++i) {
        var randomPicker = Math.floor(Math.random() * Math.floor(passwordPool.length));
         finalPassword.push(passwordPool[randomPicker])
    }

    console.log(finalPassword)

    var superFinal = finalPassword.join('');
    console.log(superFinal)

    document.getElementById("display").textContent = superFinal;
}

    //question array
    //var questions = [
    //{ q: 'Do you want to include special characters?', a: true },
    //{ q: 'Do you want to include numeric characters?', a: true },
    //{ q: 'Do you want to include lowercase characters?', a: true },
    //{ q: 'Do you want to include uppercase characters?', a: true },
    //];

    //for (i = 0; i < questions.length; i++);
    //var answer = confirm(questions[i].q);

    //var allcharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


    var password = "";

    // for (var i = 0; i < userInput; i++) {
    //     password = password + onlyUpper + onlyLower + onlySpecial + onlyNumeric.charAt(Math.floor(Math.random() * Math.floor(allcharacters.length - 1)));
    // }



function copytoClipboard() {

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Your password has now been copied to the clipboard");

}

generatePasswordButton.addEventListener('click', generatePassword);
copyToClipBoardButton.addEventListener('click', copytoClipboard);

//variables
//var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//var specialCharacters = [" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];
//var numeric = ['0', '1', '2', '3' , '4', '5', '6', '7', '8', '9'];

// Prompt length
// Check  8 < length < 128
// confirm hasSpecialCHaracters
// confirm hasUpperCase
// confirm hasLowerCase
// confirm hasNumeric   


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