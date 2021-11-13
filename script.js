document.getElementById('generate').addEventListener('click', () => {



  // User Inputs

  let lowerCase = confirm("Would you like Lowercase characters? OK or CANCEL?");


  let upperCase = confirm("Would you like Uppercase characters? OK or CANCEL?");


  let specialList = confirm("Would you like special characters? OK or CANCEL?");


  let numList = confirm('Would you like numbers? OK or CANCEL?');

  //  Valadating User Inputs

  if (!lowerCase && !upperCase && !specialList && !numList) {
    alert("Refresh the page and again....");
    return;
  };

  // Valading User Length Request
  let passLength = prompt("Enter desired password between 8 - 128 characters long...");

  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Please Select a valid number 8 and 128");
    return;

  };

  var choices = ""

  if (lowerCase) {
  choices += lowerAlph
}

if (upperCase) {
  choices += upperAlph
  
}
if (specialList) {
  choices += symbols
}

  if (numList) {
  choices += numerical
  
}

var newPassword = "";


  let userChoices = "";

  for (i = 0; i < passLength; i++) {
    Userchoices = choices[Math.floor(Math.random() * choices.length)];
    // newPassword.push(Userchoices);
  }


  var ps = newPassword.join("");
  UserInput(ps);
  return ps;


})




  function UserInput(ps) {
    document.getElementById("password").textContent = ps;
  }

  document.getElementById("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
  });




const lowerAlph = 'defghijklmnopqrstuvwxyz';
const upperAlph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numerical = '1234567890';
const symbols = '!@#$%^&*()_+|}{":?><,./;][';


