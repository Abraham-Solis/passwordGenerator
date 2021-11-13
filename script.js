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







let inputChar = [];

//sorting array to confirm user input

let guaranteedInput = []; 



if (lowerCase) {
  inputChar = inputChar.concat(lowerCase)
  guaranteedInput.push(lowerCase[Math.floor(Math.random() * lowerCase.length)])
  console.log(inputChar)
}



if (upperCase) {
  inputChar = inputChar.concat(upperCase)
  guaranteedInput.push(upperCase[Math.floor(Math.random() * upperCase.length)])
  console.log(inputChar)
}

if (numList) {
  inputChar = inputChar.concat(numList)
  guaranteedInput.push(numList[Math.floor(Math.random() * numList.length)])
  console.log(inputChar)
}

if (specialList) {
  inputChar = inputChar.concat(specialList)
  guaranteedInput.push(specialList[Math.floor(Math.random() * specialList.length)])
  console.log(inputChar)
}



})

console.log(inputChar)


const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numList = '1234567890'
const specialList = '!@#$%^&*()_+|}{":?><,./;]['


