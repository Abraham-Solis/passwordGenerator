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



})


const lowerList = 'abcdefghijklmnopqrstuvwxyz'
const upperList ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numList = '1234567890'
const specialList ='!@$%^&*()'