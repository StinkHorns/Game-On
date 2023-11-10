function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");
const acceptConditionsChecked = document.querySelector("#checkbox1");

if (closeModalBtn == null) throw new Error("No close button found");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.addEventListener("click", closeModal);
console.log(closeModalBtn)

// close modal event
function closeModal() {
  console.log("in close modal");
  if (modalbg == null) throw new Error("No Modal Background found");
  modalbg.style.display = "none";
} 

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



function checkAcceptConditions(event) {
  console.log('event:', event)
}

//First Name Validation

function validFirstName() {
const firstName = document.querySelector("#first").value;
const error = document.querySelector("#errorFirstName");
console.log(firstName)
if(firstName.length>=2){
  error.style.display="none"
  return true
}

console.log("error")
error.style.display="block"
error.innerHTML="Le Prenom doit contenir au moins 2 caracteres"
return false
}

const formulaire=document.querySelector ("#btn-submit")
console.log(formulaire)
formulaire.addEventListener("click", () =>{
  event.preventDefault()
  validFirstName()
  console.log("hola first name")
})

//Surname Validation

function validSurname() {
  const surname = document.querySelector("#last").value;
  const error = document.querySelector("#errorSurname");
  console.log(surname)
  if(surname.length>=2){
    error.style.display="none"
    return true
}

console.log("error")
error.style.display="block"
error.innerHTML="Le nom doit contenir au moins 2 caracteres"
return false
}
formulaire.addEventListener("click", () =>{
  event.preventDefault()
  validSurname()
  console.log("hola surname")
})

//Email Validation

function validEmail() {
 
 const error = document.querySelector("#errorEmail");
 const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 const emailok = document.querySelector("#email").value.match(emailPattern);

 console.log(emailok)

  //if(email.length>=2){
  //  error.style.display="none"
   // return true

  if(emailok){
  error.style.display="none"
  return true
}

console.log("error")
error.style.display="block"
error.innerHTML="Adresse e-mail invalide"
return false
}
formulaire.addEventListener("click", () =>{
  event.preventDefault()
  validEmail()
  console.log("hola Email")
})

