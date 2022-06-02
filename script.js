var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


function getLowercase () {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getUppercase () {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getNumber () {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbol () {
  return symbols[Math.floor(Math.random() * symbols.length)];
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