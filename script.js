// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword ()
    
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // criteria: password length
  var passwordLength= window.prompt("What length do you want your password to be? Write a number between 8 and 128 characters.");
    while (passwordLength<8 || passwordLength>128){
      alert("Invalid response. Password length must be a number between 8&128. Please input a different response");
      window.prompt("What length do you want your password to be? Write a number between 8 and 128 characters.");
    }

      alert("Your password will have " + passwordLength + " characters.");
      console.log("Password length: " + passwordLength); 
  
  
  // criteria: upper or lower case
  var UpperLower= window.prompt("Do you want to include UPPERCASE, LOWERCASE characters, or BOTH? Please write 1 for UPPERCASE, 2 for LOWERCASE, or 3 for BOTH.");
    UpperLower = parseInt(UpperLower);

    // use switch case to carry out action
     switch (UpperLower) {
      case 1:
        var UpperLower= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       break;

      case 2:
        var UpperLower= "abcdefghijklmnopqrstuvwxyz";   
       break;

      case 3:
        var UpperLower= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" 
       break;

      default:
       window.alert("You did not write a valid response. Please try again.");
       UpperLower= window.prompt("Do you want to include UPPERCASE, LOWERCASE characters, or BOTH? Please write 1 for UPPERCASE, 2 for LOWERCASE, or 3 for BOTH.");
       break;
    }

  
  //criteria: numeric
  var Numeric= window.confirm("Do you want to include numeric characters in your password?");
    if (Numeric) {
      window.alert("Your password will include numeric characters!");
      var Numeric= "0123456789"
    } else {
      window.alert("Your password will not have numeric characters");
    }



  //criteria: special characters
  var SpecialChars= window.confirm("Do you want to include special characters in your password?")
    if (SpecialChars) {
      window.alert("Your password will include special characters!");
      var SpecialChars= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~ " 
    } else {
      window.alert("Your password will not have special characters");
    }

  

  var chars = Numeric + UpperLower + SpecialChars

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
return password
  };



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
