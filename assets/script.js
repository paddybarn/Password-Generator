//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page//


// Assignment Code
var generateBtn = document.querySelector("#generate");
var acceptedTypesArray = ["lowercase", "uppercase", "numeric", "special characters"];
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numeric = "0123456789"
var specialCharacters = "~`!@#$%^&*()-_+={}[]|\\/:;\"\'<>,.?"

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("how many characters?", 8);

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error, outside value parameters")
    return
  }

  var characterTypes = prompt("Specify character types", "lowercase,uppercase,numeric,special characters")
  var characterTypesArray = characterTypes.split(",")
  for (var i = 0; i < characterTypesArray.length; i++) {
    if (!acceptedTypesArray.includes(characterTypesArray[i])) {
      alert("Error, " + characterTypesArray[i] + " outside value parameters")
      return
    }

  }
  var password = generatePassword(passwordLength, characterTypesArray);
  alert("Your Password is " + password)
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}

function generatePassword(passwordLength, characterTypesArray) {
  var result = '';
  var characters = "";
  if(characterTypesArray.includes("lowercase")){
    characters+= lowercase
  }
  if(characterTypesArray.includes("uppercase")){
    characters+= uppercase
  }
  if(characterTypesArray.includes("numeric")){
    characters+= numeric
  }
  if(characterTypesArray.includes("special characters")){
    characters+= specialCharacters
  }
  var charactersLength = characters.length;
  for (var i = 0; i < passwordLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



