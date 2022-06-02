//blank array to be populated by selected variables below
var varArray = []; 

//array of uppercase letters
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//array of lowercase letters
var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//array of numbers
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

//array of symbols
var symbols = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/", ":", ";", "<", "=", ">", "?", "@","^", "`", "_", "{", "|", "}", "~"];



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

function generatePassword() {
  var pwLength = promptLength();
  var valid = finalValidation();

  if (valid == false) {
    finalValidation();
  }
  else {
    var password = "";
      for(var i = 0; i < pwLength; i++){
      var randomIndex = Math.floor(Math.random() * varArray.length);
      password = password + varArray[randomIndex];
  }
    return password;
}
}

function promptLength () {
  let pwLength = prompt ("Please enter your desired password length", "8 ~ 128");{
    if(pwLength < 8 || pwLength > 128); {
      alert('Please enter a valid number between 8 and 128');
      promptLength();
     }
     else {
       return pwLength;
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
    return false;
  }
  else {
    return true;
  }
}

function promptLowercase () {
  varArray = [];
  let lower = prompt ("Please confirm if you would like lower case letters to be included in your password", "Yes or No"); {
    if (lower == 'Yes') {
      alert ('Lower case letters will be included in your password');
      varArray = varArray.concat(lowerLetters);
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
      varArray = varArray.concat(upperLetters);
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
      varArray = varArray.concat(numbers);
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
      varArray = varArray.concat(symbols);
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



 

 



