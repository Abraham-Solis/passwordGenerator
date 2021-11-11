document.getElementById('generate').addEventListener('click', () => {



// User Inputs

let lowerList = confirm("Would you like Lowercase characters? OK or CANCEL?");
 

let upperList = confirm("Would you like Uppercase characters? OK or CANCEL?");


let specialList = confirm("Would you like special characters? OK or CANCEL?");


let numList = confirm('Would you like numbers? OK or CANCEL?');

//  Valadating User Inputs

if (!lowerList && !upperList && !specialList && !numList){
  alert("Refresh the page and again....");
  return;
};

// Valading User Length Request
let passLength = prompt("Enter desired password between 8 - 128 charcters long...");

if(passLength <8 ||passLength <128 ||isNaN(passLength)){
  alert("Please Select a valid number 8 and 128");
  return;

}

//storing arrays that user chose

let inputChar =[]; 

//sorting array to confirm user input

let guaranteedInput = [];



  if (lowerList) {
    inputChar = inputChar.concat(lowerCase);
    guaranteedInput.push(
      lowerCase[
        Math.floor(Math.random() * lowerCase.length)]
      console.log(lowerList)
    );
  }


































})










const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const upperCase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numList = '1234567890'
const specialList ='!@#$%^&*()_+|}{":?><,./;]['

