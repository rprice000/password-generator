// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  function generatePassword() {
   
    var choiceStart = window.prompt("Please choose the length of characters for the new Password. Choose between 8 and 128.");
   
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Lowercase characters
lowerAlphas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase characters
upperAlphas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// Special Characters
specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Onclick "Generate Password" Prompt come up
// Prompt 1 Please Choose the length of the new Password. Choose between 8 and 128
// Prompt if user does not select length between 8 and 128
// Prompt 2 Please Choose if new Password will contain lower case characters
// Prompt 3 Please Choose if new Password will contain upper case characters
// Prompt 4 Please Choose if new Password will contain special characters
// Prompt 5 Please Choose if new Password will contain numbers
// Prompt if user does not select any choices from prompts 2 - 5
// Series of if/else statements