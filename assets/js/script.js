// Get the length of the password from the user's input
function getLength() {
  var length;

  while (true) {
    length = parseInt(prompt("Enter the length of your password:"));

    // Validate that the password contains only numbers and is between 8 and 128 characters
    if (Number.isInteger(length) && length >= 8 && length <= 128) {
      break;
    }

    alert("Please enter a valid number between 8 and 128");
  }

  return length;
}
// Declare characters for each character type
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbols = "^!$%&|[](){}:;.,*+-#@<>~";

// Get the characters from user's input
function getCharacters() {
  var inclLowCase;
  var inclUpCase;
  var inclNum;
  var inclSym;

  while (true) {
    inclLowCase = confirm("Should your password include lowercase characters?");
    inclUpCase = confirm("Should your password include uppercase characters?");
    inclNum = confirm("Should your password include numbers?");
    inclSym = confirm("Should your password include special characters?");

    // Validate that at least one character type is chosen
    if (inclLowCase || inclUpCase || inclNum || inclSym) {
      break;
    } else {
      alert("Please choose at least one character type");
    }
  }
  // Add the chosen characters to one string in the "characters" variable
  var characters = "";

  if (inclLowCase) {
    characters += lowCase;
  }
  if (inclUpCase) {
    characters += upCase;
  }
  if (inclNum) {
    characters += numbers;
  }
  if (inclSym) {
    characters += symbols;
  }

  return characters;
}
// Generate a secure password based on criteria chosen by user
function generatePassword() {
  var length = getLength();
  var characters = getCharacters();

  var password = "";
  for (var i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
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
