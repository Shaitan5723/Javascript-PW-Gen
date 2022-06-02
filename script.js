const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function promptLength () {
  let pwLength = prompt("Please enter your desired password length", "8 ~ 128"); {
    if (pwLength < 8) {
      alert('Please enter a valid number between 8 and 128');
      promptLength();
}
    else if (pwLength > 128) {
      alert('Please enter a valid number between 8 and 128');
      promptLength();
}
    else {
      alert('Your password will be ' + pwLength + ' characters long.');
      return pwLength;
    }
  }
}

function promptLowercase () {
  let lower = prompt ("Please confirm if you would like lower case letters to be included in your password", "Yes or No"); {
    if (lower == 'Yes') {
      alert ('Lower case letters will be included in your password');
      return true;
    }
    else if (lower == 'No'){
      alert ('Lower case letters will not be included in your password');
      return false;
    }
    else {
      alert('Please enter Yes or No, then hit OK');
      promptLowercase();
    }
  }
 }


function promptUppercase () {
  let upper = prompt ("Please confirm if you would like lower case letters to be included in your password", "Yes or No"); {
    if (upper == 'Yes') {
      alert ('Upper case letters will be included in your password');
      return true;
    }
    else if (upper == 'No'){
      alert ('Upper case letters will not be included in your password');
      return false;
    }
    else {
      alert('Please enter Yes or No, then hit OK');
      promptUppercase();
    }
  }
 
}

function promptNumber () {
  let num = prompt ("Please confirm if you would like numbers to be included in your password", "Yes or No"); {
    if (num == 'Yes') {
      alert ('Numbers will be included in your password');
      return true;
    }
    else if (num == 'No') {
      alert ('Numbers will not be included in your password');
      return false;
    }
    else {
      alert('Please enter Yes or No, then hit OK');
      promptNumber();
    }
  }
  
}

function promptSymbol () {
  let symb = prompt ("Please confirm if you would like symbols to be included in your password", "Yes or No"); {
    if (symb == 'Yes') {
      alert ('Symbols will be included in your password');
      return true;
    }
    else if (symb == 'No'){
      alert ('Symbols will not be included in your password');
      return false;
    }
    else {
      alert('Please enter Yes or No, then hit OK');
      promptSymbol ();
    }
  }
 
}

function finalValidation(){
  var lower = promptLowercase ();
  var upper = promptUppercase();
  var num = promptNumber ();
  var symb = promptSymbol ();

  if (lower == false && upper == false && num == false && symb == false) {
    alert ('Please choose at least 1 type of character to be included in your password')
    generatePassword();
  }
  else {
    return true;
  }
}

function getLowercase (){
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUppercase (){
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber (){
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol (){
  return symbols[Math.floor(Math.random() * symbols.length)];
}



function generatePassword() {
  var validity = finalValidation ();
  var pwLength = promptLength ();
  var lower = getLowercase ();
  var upper = getUppercase();
  var num = getNumber ();
  var symb = getSymbol ();

 
    return 
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// console.log (a) -