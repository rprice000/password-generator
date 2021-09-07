// Assignment code here

// Lowercase characters
var lowerAlphas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase characters
var upperAlphas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// Special Characters
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var userChoices;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  function generatePassword() {
//Asks user to select length of new password (parseInt holds user input)
    userChoices = parseInt(window.prompt("Please choose the length of characters for the new Password. Choose between 8 and 128."));
    if (!userChoices) {
//Alerts if user selects cancel
          alert("You must select a password length.");
// Asks user to select a password length if selected cancel or selected outside of the length range (parseInt holds user input)
          } else if (userChoices < 8 || userChoices > 128) {
            userChoices = parseInt(window.prompt("You did not chose a number between 8 and 128.  Please choose a number between 8 and 128."));
          } else { 
// Other choices user must make to create new password
            lowerCaseChoice = window.confirm("Will the new password contain lower case letters?");
            upperCaseChoice = window.confirm("Will the new password contain upper case letters?");
            specialCharactersChoice = window.confirm("Will the new password contain special characters?");
            numbersChoice = window.confirm("Will the new password contain numbers?");
/* END OF FIRST IF/ELSE STATEMENT FOR USER PROMPTS */
          };
/* END OF FIRST IF/ELSE STATEMENT FOR USER PROMPTS */





/* END OF generatePassword Function */
};
/* END OF generatePassword Function */

/* END OF writePassword Function */
}
/* END OF writePassword Function */



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Prompt 2 Please Choose if new Password will contain lower case characters
// Prompt 3 Please Choose if new Password will contain upper case characters
// Prompt 4 Please Choose if new Password will contain special characters
// Prompt 5 Please Choose if new Password will contain numbers
// Prompt if user does not select any choices from prompts 2 - 5
// Series of if/else statements