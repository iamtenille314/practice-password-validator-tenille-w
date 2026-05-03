const readlineSync = require("readline-sync");

let password;
let isValid = false;

do {
  password = readlineSync.question("Enter a password: ");

  let hasUppercase = false;
  let hasNumber = false;

  for (let char of password) {
    if (char >= "A" && char <= "Z") {
      hasUppercase = true;
    }

    if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
  }

  if (password.length >= 8 && hasUppercase && hasNumber) {
    isValid = true;
    console.log("Password accepted. You have been successful.");
  } else {
    console.log("Password does not meet the requirements. Please try again.");
  }

} while (!isValid);