

var questions = [
  { q: "Should the password contain a number?"},
  { q: "Should the password contain a capital letter?"},
  { q: "Should the password contain a special character?"},
  { q: "Should the password contain a lower case letter?"}
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



for (var i = 0; i < questions.length; i++) {
  // Display current question to user and ask OK/Cancel
  var answer = confirm(questions[i].q);
}

// notes //

//promt the user to select password criteria
//prompt the user to select a length 8-10 characters
//prompt the user to choose choose lowercase, uppercase, numeric, and/or special characters

//generating a single random number between 1-9

for (var i = 9; i < 10; i++) {
  // Generate a random number between 1 and 10
  // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
 var num = Math.floor(Math.random() * 10);

  // Display in console
  console.log(num);
}