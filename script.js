document.getElementById('generate').addEventListener('click', () => {



// User Inputs

 let passLength = prompt("Enter desired password between 8 - 128 charcters long...");

 let lowerList = confirm("Would you like Lowercase characters? OK or CANCEL?");
 

 let upperList = confirm("Would you like Uppercase characters? OK or CANCEL?");


 let specialList = confirm("Would you like special characters? OK or CANCEL?");



let numList = confirm('Would you like numbers? OK or CANCEL?')

 
})


const lowerList = 'abcdefghijklmnopqrstuvwxyz'
const upperList ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numList = '1234567890'
const specialList ='!@$%^&*()'