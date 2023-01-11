function getLength() {
  let length;

  while (true) {
    length = parseInt(prompt("What would be the length of your password?"));

    if (Number.isInteger(length) && length >= 8 && length <= 128) {
      break;
    }

    alert("Please enter a valid number between 8 and 128");
  }

  return length;
}

const lowCase = "abcdefghijklmnopqrstuvwxyz";
const upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "1234567890";
const symbols = "^!$%&|[](){}:;.,*+-#@<>~";

function getCharacters() {
  let inclLowCase;
  let inclUpCase;
  let inclNum;
  let inclSym;

  while (true) {
    inclLowCase = confirm("Should your password include lowercase characters?");
    inclUpCase = confirm("Should your password include uppercase characters?");
    inclNum = confirm("Should your password include numbers?");
    inclSym = confirm("Should your password include special characters?");

    if (inclLowCase || inclUpCase || inclNum || inclSym) {
      break;
    } else {
      alert("Please choose at least one character type");
    }
  }
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
