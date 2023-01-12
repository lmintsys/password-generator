//
function getLength() {
  let length;

  while (true) {
    length = parseInt(prompt("Enter the length of your password:"));

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

  let characters = "";

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
  console.log(characters);
  return characters;
}

function generatePassword() {
  const length = getLength();
  const characters = getCharacters();

  let password = "";
  for (let i = 0; i < length; i++) {
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
