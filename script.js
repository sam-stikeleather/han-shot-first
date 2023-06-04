// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var upper = prompt("Would you like upper case letters? Y or N");
console.log("Upper: " + upper);

var numbers = prompt("Would you like to include numbers? Y or N");
console.log("Numbers: " + numbers);

var characters = prompt("Would you like to include special characters? i.e. !@#$% Y or N");
console.log("Special: " + characters);

var prompt = prompt("Please indicate a password length between 8 - 128 characters.");
console.log("Length: " + prompt);



var generatePassword = (
  length = 20,
  wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
) =>
  Array.from(crypto.getRandomValues(new Uint32Array(length)))
    .map((x) => wishlist[x % wishlist.length])
    .join('')

console.log(generatePassword())



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
