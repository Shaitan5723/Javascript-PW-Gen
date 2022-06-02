var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

function getLength () {
  let pwLength = prompt("Please enter your desired password length", "8 ~ 128"); {
    if (pwLength < 8) {
   alert('Please enter a valid number between 8 and 128');
  table();
}
    else if (pwLength > 128) {
    alert('Please enter a valid number between 8 and 128');
    table();
}
    else {
    alert('Thank you, your chosen password will be ' + pwLength + ' characters long.');
    }
}
}

function getLowercase () {
  let lower = prompt ("Please confirm if you would like lower case letters to be included in your password", "Yes or No"); {
    if (lower == 'Yes') {
      alert ('Lower case letters will be included in your password');
      lower = true;
    }
    else if (lower == 'No'){
      alert ('Lower case letters will not be included in your password');
      lower = false;
    }
    else {
      alert('Please enter in Yes or No, then hit OK');
      table();
    }
  }
 
}


function getUppercase () {
  let upper = prompt ("Please confirm if you would like lower case letters to be included in your password", "Yes or No"); {
    if (upper == 'Yes') {
      alert ('Upper case letters will be included in your password');
      upper = true;
    }
    else if (upper == 'No'){
      alert ('Upper case letters will not be included in your password');
      upper = false;
    }
    else {
      alert('Please enter in Yes or No, then hit OK');
    }
  }
 
}

function getNumber () {
  let num = prompt ("Please confirm if you would like numbers to be included in your password", "Yes or No"); {
    if (num == 'Yes') {
      alert ('Numbers will be included in your password');
      num = true;
    }
    else if (num == 'No') {
      alert ('Numbers will not be included in your password');
      num = false;
    }
    else {
      alert('Please enter in Yes or No, then hit OK');
      table();
    }
  }
  
}

function getSymbol () {
  let symb = prompt ("Please confirm if you would like symbols to be included in your password", "Yes or No"); {
    if (symb == 'Yes') {
      alert ('Symbols will be included in your password');
      symb = true;
    }
    else if (symb == 'No'){
      alert ('Symbols will not be included in your password');
      symb = false;
    }
    else {
      alert('Please enter in Yes or No, then hit OK');
      table();
    }
  }
 
}

function generatePassword() {
  var length = getLength ();
  var lower = getLowercase ();
  var upper = getUppercase();
  var num = getNumber ();
  var symb = getSymbol ();


  return symbols[Math.floor(Math.random() * symb.length)];
  return numbers[Math.floor(Math.random() * num.length)];
  return upper[Math.floor(Math.random() * upper.length)];
  return lower[Math.floor(Math.random() * lower.length)];
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