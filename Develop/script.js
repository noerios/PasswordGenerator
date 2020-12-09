
// Assignment Code
var generateBtn = document.querySelector("#generate");

// defining characters, capitals, lowers, and numbers
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var questionPrompt = {
  number: "Should the password contain a number?",
  capital: "Should the password contain a capital letter?",
  special: "Should the password contain a special character?",
  lower: "Should the password contain a lower case letter?",
  length: "How long should the password be (8-128 characters)?"
}

// functions for generating password and displaying errors
function generatePassword() {
  var passLength = parseInt(prompt(questionPrompt.length))
  if(isNaN(passLength) === true){
    alert('Numbers Only!');
    return;
  }
  if(passLength < 8 || passLength > 128) {
    alert("Must be greater than 8 and less than 128!");

    return;
  }
  var hasSpecialCharacter = confirm(questionPrompt.special);
  var hasNumber = confirm(questionPrompt.number);
  var hasCapital = confirm(questionPrompt.capital);
  var hasLowerCase = confirm(questionPrompt.lower);

  if(hasSpecialCharacter === false && hasNumber === false && hasCapital === false && hasLowerCase === false) {
    alert("Must select at least one criteria!");
    return;
  } 

//assigning criteria

var password  = '';
for(var i = 0; i < passLength; i++ ){

    if(hasSpecialCharacter && password.length < passLength){
      password+= getRandom(specialCharacters);
    }
    if(hasLowerCase && password.length < passLength){
      password+= getRandom(lowerCasedCharacters);
    }
    if(hasCapital && password.length < passLength){
      password+= getRandom(upperCasedCharacters);
    }
    if(hasNumber && password.length < passLength){
      password+= getRandom(numericCharacters);
    }

}
return password;
}

function getRandom(value){
  var randIndex = Math.floor(Math.random() * value.length);
  var randElement = value[randIndex];

  return randElement;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.onclick = writePassword;



