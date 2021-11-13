lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

symbols = ["!", "#", "$", "%", "&", "'", "*", "+", ",", ".", "/",  " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "`", "{", "|", "}", "~"];


let choices;
let toUpper = function (a) {
  return a.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

let enter;
let confirmsymbols;
let confirmUppercase;
let confirmNumber; 
let confirmLowercase; 

function generatePassword() {

  enter = parseInt(prompt("Please enter a desired amount of between 8-128."));

  if (!enter) {
    alert("PLEASE ENTER ACCORDING TO PROMPT!");
  } else if (enter < 8 || enter > 128) {

    enter = parseInt(prompt("Please stay between 8 and 128"));

  } else {

    confirmsymbols = confirm("Do u want symbols?");
    confirmUppercase = confirm("Do u want UpperCase Letters?");
    confirmLowercase = confirm("Do u want LowerCase Letters?");
  };


  if (!confirmsymbols && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("WHY U NO PICK ONE>>REFRESH");

  }

  else if (confirmsymbols && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = symbols.concat(number, lowerCase, upperCase);
  }
  else if (confirmsymbols && confirmNumber && confirmLowercase) {
    choices = symbols.concat(number, lowerCase); 
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(lowerCase, upperCase); 
  }
  else if (confirmsymbols && confirmNumber && confirmUppercase) {
    choices = symbols.concat(number, upperCase);
  }
  else if (confirmsymbols && confirmLowercase && confirmUppercase) {
    choices = symbols.concat(lowerCase, upperCase); 
  }

  else if (confirmsymbols && confirmNumber) {
    choices = symbols.concat(number); 

  } else if (confirmNumber && confirmUppercase) {
    choices = number.concat(upperCase); 

  } else if (confirmsymbols && confirmUppercase) {
    choices = symbols.concat(upperCase);
  }
    else if (confirmLowercase && confirmNumber) {
    choices = lowerCase.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
    choices = lowerCase.concat(upperCase);
  
  } else if (confirmsymbols && confirmLowercase) {
  choices = symbols.concat(lowerCase); 
  
  }else if (confirmLowercase) {
    choices = lowerCase;
  
  }else if (confirmsymbols) {
    choices = symbols; 
  
  }else if (confirmNumber) {
    choices = number;

  }else if (confirmUppercase) {
    choices = space.concat(upperCase);

  };

  let password = [];


  for (let i = 0; i < enter; i++) {
    let pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }

  let ps = password.join("");
  UserInput(ps);
  return ps;
}

function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}

let get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

