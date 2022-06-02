//blank array to be populated by selected variables below
var varArray = []; 

//array of uppercase letters
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//array of lowercase letters
var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//array of numbers
var numbers = ["1","2","3","4","5","6","7","8","9","0"];

//array of symbols
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "[", "]", "=", ">", "?", "@","^", "`", "_", "{", "|", "}", "~"];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var newPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  //error message if the selected criteria are not valid
  if (newPassword == false) {
    alert('Something went wrong, please try again')
    passwordText.value = "";
  } 
  else {  
    passwordText.value = newPassword; 
  }

}

//Generate Password function
function generatePassword() {
  var pwLength = promptLength();
  var lower = promptLowercase ();
  var upper = promptUppercase();
  var num = promptNumber ();
  var symb = promptSymbol ();

  //if no character types are selected, the function will return 'false'
  if (lower == false && upper == false && num == false && symb == false) {
    alert ('Please choose at least 1 type of character to be included in your password')
    return false;
  }
  //If at least one character type is selected, the function will create a password using a for loop.
  else {
  var password = "";
      for(var i = 0; i < pwLength; i++){
      var randomIndex = Math.floor(Math.random() * varArray.length);
      password = password + varArray[randomIndex];
    }
    return password;
  }
} 


//prompt created to ask user to input their desired password length
function promptLength() {
  let pwLength = parseInt(prompt("Please enter your desired password length", "8 ~ 128")); {
    if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
      alert ('Please pick a valid number between 8 ~ 128');
      promptLength(); //if an invalid number/character is selected, the function will repeat itself
    }
    else {
    alert('Your Password will be ' + pwLength + ' characters long');
    return pwLength;
    }
  }
}

//Prompt to ask user if they would like to include lowercase letters into their password
function promptLowercase() {
  //clears the varArray of any stored variables from previous uses of the generator
  varArray = [];

  let lower = prompt ("Please confirm if you would like lower case letters to be included in your password", "Yes or No"); {
    if (lower == 'Yes') {
      alert ('Lower case letters will be included in your password');
      //once yes is selected, the array of lowerLetters will be added to varArray
      varArray = varArray.concat(lowerLetters);
      return true;
    }
    //if no is selected, the function will return false (used only for validation)
    else if (lower == 'No'){
      alert ('Lower case letters will not be included in your password');
      return false;
    }
    //Error Message if the wrong value is entered, will run the function again
    else {
      alert('Please enter Yes or No, then hit OK');
      promptLowercase();
    }
  }
}

//Prompt to ask user if they would like to include uppercase letters into their password
function promptUppercase() {
  let upper = prompt ("Please confirm if you would like lower case letters to be included in your password", "Yes or No"); {
    if (upper == 'Yes') {
      alert ('Upper case letters will be included in your password');
      //once yes is selected, the array of upperLetters will be added to varArray
      varArray = varArray.concat(upperLetters);
      return true;
    }
     //if no is selected, the function will return false (used only for validation)
    else if (upper == 'No'){
      alert ('Upper case letters will not be included in your password');
      return false;
    }
     //Error Message if the wrong value is entered, will run the function again
    else {
      alert('Please enter Yes or No, then hit OK');
      promptUppercase();
    }
  }
}
//Prompt to ask user if they would like to include numbers into their password
function promptNumber() {
  let num = prompt ("Please confirm if you would like numbers to be included in your password", "Yes or No"); {
    if (num == 'Yes') {
      alert ('Numbers will be included in your password');
      //once yes is selected, the array of numbers will be added to varArray
      varArray = varArray.concat(numbers);
      return true;
    }
     //if no is selected, the function will return false (used only for validation)
    else if (num == 'No') {
      alert ('Numbers will not be included in your password');
      return false;
    }
     //Error Message if the wrong value is entered, will run the function again
    else {
      alert('Please enter Yes or No, then hit OK');
      promptNumber();
    }
  }
}

//Prompt to ask user if they would like to include symbols into their password
function promptSymbol() {
  let symb = prompt ("Please confirm if you would like symbols to be included in your password", "Yes or No"); {
    if (symb == 'Yes') {
      alert ('Symbols will be included in your password');
      //once yes is selected, the array of symbols will be added to varArray
      varArray = varArray.concat(symbols);
      return true;
    }
     //if no is selected, the function will return false (used only for validation)
    else if (symb == 'No'){
      alert ('Symbols will not be included in your password');
      return false;
    }
     //Error Message if the wrong value is entered, will run the function again
    else {
      alert('Please enter Yes or No, then hit OK');
      promptSymbol();
    }
  }
}



 

 



