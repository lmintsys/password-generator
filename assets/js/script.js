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
