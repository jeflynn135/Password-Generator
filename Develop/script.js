// Assignment code here


function generatePassword() {
  let user_length = prompt("Password Length")
  if (user_length < 8 || user_length > 128 || isNaN(user_length)) {
    alert("Password Length Must Be Between 8 and 128 Characters")
    return generatePassword()
  }
  let numbers = confirm("Incude Numbers")
  let uppercase = confirm("Include Uppercase")
  let lowercase = confirm("Include lowercase")
  let symbols = confirm("Include Symbols")
  if (!numbers && !uppercase && !lowercase && !symbols) {
    alert("Must Include At Least 1 Type of Character")
    return generatePassword()
  }
  let characters = "";
  if (numbers) {
    characters += "0123456789"
  }
  if (uppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (lowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz"
  }
  if (symbols) {
    characters += "!@#$%^&*"
  }
  console.log(characters)

  let passwordArray = [];
  while (passwordArray.length < user_length) {
    const character = characters[Math.floor(Math.random() * characters.length)];
    // if (!noDuplicates || !passwordArray.includes(character)) {
    passwordArray.push(character)
    // }
  }
  return passwordArray.join("");
}
// checkbox attempt
// function myFunction() {
//   var x = document.getElementById("myCheck");
//   x.checked = true;
// }


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
