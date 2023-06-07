// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // Prompt the user for password requirements
  var uppercase = confirm("Include uppercase letters?");
  var lowercase = confirm("Include lowercase letters?");
  var numbers = confirm("Include numbers?");
  var specialChars = confirm("Include special characters?");
  var length = prompt("Specify the length of the password (between 8 - 128 characters):");

  // Validate the length input
  while (length < 8 || length > 128) {
    length = prompt("Invalid length. Please specify a length between 8 - 128 characters:");
  }

  // Define character sets based on user requirements
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  // Create an array to store the character sets based on user requirements
  var charSet = [];

  if (uppercase) {
    charSet.push(uppercaseChars);
  }

  if (lowercase) {
    charSet.push(lowercaseChars);
  }

  if (numbers) {
    charSet.push(numberChars);
  }

  if (specialChars) {
    charSet.push(specialChars);
  }

  // Generate the password
  var password = "";
  var charSetLength = charSet.length;

  for (var i = 0; i < length; i++) {
    var randomCharSetIndex = Math.floor(Math.random() * charSetLength);
    var randomCharSet = charSet[randomCharSetIndex];
    var randomCharIndex = Math.floor(Math.random() * randomCharSet.length);
    var randomChar = randomCharSet[randomCharIndex];
    password += randomChar;
  }

  return password;
}

// Call the generatePassword function and display the generated password
var generatedPassword = generatePassword();
console.log("Generated Password: " + generatedPassword);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

