// Assignment code here


/* Lowercase characters */
    var lowerAlphas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
/* Uppercase characters */
    var upperAlphas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
/* Special Characters */
    var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
/* Numeric characters */
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
/* Variable for length of new password */
    var userLength;
/* Variable for what characters types are needed in the password */
    var userCharacterType;


/* Get references to the #generate element */
    var generateBtn = document.querySelector("#generate");

/* Runs this function after #generate has been selected */
    function writePassword() {


/* Variable that is stored after generatePassword function runs */
        var password = generatePassword();
/* Grabs the textarea element */
        var passwordText = document.querySelector("#password");
/* Sets password variable equal to textarea ID password in html doc */
        passwordText.value = password;

        function generatePassword() {

/* Asks user to select length of new password (parseInt holds user input) */
            userLength = parseInt(window.prompt("Please choose the length of characters for the new Password. Choose between 8 and 128."));
            if (!userLength || userLength < 8 || userLength > 128) {
/* Alerts if user selects cancel or makes a length less than 8 or greater than 128 */
              alert("To proceed futher you must select a password length between 8 and 128.");
/* Asks user to select a password length if selected cancel or selected outside of the length range (parseInt holds user input) */
              userLength = parseInt(window.prompt("Please choose the length of characters for the new Password. Choose between 8 and 128."));
              } else { 
/* Other choices user must make to create new password */
                lowerCaseChoice = window.confirm("Will the new password contain lower case characters?");
                upperCaseChoice = window.confirm("Will the new password contain upper case characters?");
                specialCharactersChoice = window.confirm("Will the new password contain special characters?");
                numbersChoice = window.confirm("Will the new password contain number characters?");
              };
/* END OF FIRST IF/ELSE STATEMENT FOR USER PROMPTS */

/* If user selects cancel for each character type prompt this second alert with same prompts will show up */
            if (!lowerCaseChoice && !upperCaseChoice && !specialCharactersChoice && !numbersChoice) {
              alert("To proceed futher you must select at least one character type.");
              lowerCaseChoice = window.confirm("Will the new password contain lower case characters?");
              upperCaseChoice = window.confirm("Will the new password contain upper case characters?");
              specialCharactersChoice = window.confirm("Will the new password contain special characters?");
              numbersChoice = window.confirm("Will the new password contain number characters?");
            }
/* If user selects all 4 choices */
/* Depending on what choices user selects .concat method used to merge arrays by creating a new array with all characters */
              else if (lowerCaseChoice && upperCaseChoice && specialCharactersChoice && numbersChoice) {
              userCharacterType = lowerAlphas.concat(upperAlphas, specialCharacters, numbers)
             }
/* If user selects only lowerAlphas, upperAlphas, specialCharacters */
              else if (lowerCaseChoice && upperCaseChoice && specialCharactersChoice) {
              userCharacterType = lowerAlphas.concat(upperAlphas, specialCharacters)
             }
/* If user selects only lowerAlphas, specialCharacters, numbers */
              else if (lowerCaseChoice && specialCharactersChoice && numbersChoice) {
              userCharacterType = lowerAlphas.concat(specialCharacters, numbers)
             }
/* If user selects only lowerAlphas, upperAlphas, numbers */
              else if (lowerCaseChoice && upperCaseChoice && numbersChoice) {
              userCharacterType = lowerAlphas.concat(upperAlphas, numbers)
             }
/* If user selects only upperAlphas, specialCharacters, numbers */
              else if (upperCaseChoice && specialCharactersChoice && numbersChoice) {
              userCharacterType = upperAlphas.concat(specialCharacters, numbers)
             }
/* If user selects only lowerAlphas, upperAlphas */
              else if (lowerCaseChoice && upperCaseChoice) {
              userCharacterType = lowerAlphas.concat(upperAlphas)
             }
/* If user selects only lowerAlphas, specialCharacters */
              else if (lowerCaseChoice && specialCharactersChoice) {
              userCharacterType = lowerAlphas.concat(specialCharacters)
             }
/* If user selects only lowerAlphas, numbers */
              else if (lowerCaseChoice && numbersChoice) {
              userCharacterType = lowerAlphas.concat(numbers)
             }
/* If user selects only upperAlphas, specialCharacters */
             else if (upperCaseChoice && specialCharactersChoice) {
             userCharacterType = upperAlphas.concat(specialCharacters)
             }
/* If user selects only upperAlphas, numbers */
             else if (upperCaseChoice && numbersChoice) {
             userCharacterType = upperAlphas.concat(numbers)
             }
/* If user selects only specialCharacters, numbers */
             else if (specialCharactersChoice && numbersChoice) {
             userCharacterType = specialCharacters.concat(numbers)
             }
/* If user selects only lowerAlphas */
/* .concat method is not used.  User made only one character type selection */
             else if (lowerCaseChoice) {
             userCharacterType = lowerAlphas
             }
/* If user selects only upperAlphas */
             else if (upperCaseChoice) {
             userCharacterType = upperAlphas
             }
/* If user selects only specialCharacters */
             else if (specialCharactersChoice) {
             userCharacterType = specialCharacters
             }
/* If user selects only numbers */
             else if (numbersChoice) {
             userCharacterType = numbers
             }
/* If user still did not select any character types */
              else {
               alert("To proceed futher you must select at least one character type.");
               lowerCaseChoice = window.confirm("Will the new password contain lower case characters?");
               upperCaseChoice = window.confirm("Will the new password contain upper case characters?");
               specialCharactersChoice = window.confirm("Will the new password contain special characters?");
               numbersChoice = window.confirm("Will the new password contain number characters?");
             };
/* END OF SECOND IF/ELSE STATEMENT TO FIND USER CHARACTER TYPES */

    var characterarr = [];

/* Loop that will search through all character type arrays */
          for (var i = 0; i < userLength; i++) {
/* Creates variable that is a combination of characters selected from the loop */
            var selectedCharacter = userCharacterType[Math.floor(Math.random() * userCharacterType.length)]
            characterarr.push(selectedCharacter)
          };
    
          return characterarr.join('')
             
/* END OF generatePassword Function */
    };
/* END OF generatePassword Function */

/* END OF writePassword Function */
};
/* END OF writePassword Function */


/* Event listener to generate button */
generateBtn.addEventListener("click", writePassword);

