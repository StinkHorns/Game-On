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
const modalBody = document.querySelectorAll(".modal-body");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");


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
error.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du prenom"
return false
}

const formulaire=document.querySelector ("#btn-submit")
console.log(formulaire)


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
error.innerHTML="Veuillez entrer 2 caractères ou plus pour le champ du nom"
return false
}


//Email Validation

function validEmail() {
 
 const error = document.querySelector("#errorEmail");
 const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 const emailok = document.querySelector("#email").value.match(emailPattern);

 console.log(emailok)


if(emailok){
  error.style.display="none"
  return true
}

console.log("error")
error.style.display="block"
error.innerHTML="Adresse e-mail invalide"
return false
}


// Date of Birth Validation
function inputDOB() {
 
  const error = document.querySelector("#errorDOB");
  const okDOB = document.querySelector("#birthdate").value.length >= 1;
 
  console.log(document.querySelector("#birthdate").value)
 
 
 if(okDOB){
   error.style.display="none"
   return true
 }
 
 console.log("error")
 error.style.display="block"
 error.innerHTML="Vous devez entrer votre date de naissance"
 return false
 }


  //Number Tournois Validation

function validNrTournois() {
  const quantity = document.querySelector("#quantity").value;
  const error = document.querySelector("#errorNrTournois");
  console.log(quantity)

  if(quantity>=0 && quantity<100 && quantity.length>0){
    error.style.display="none"
    return true
    }


console.log("error")
error.style.display="block"
error.innerHTML="Le nombre de tournois doit être entre 0 et 99"
return false
}


// Btn Radio Selection Validation

function confirmTournoi () {
  const checkedLocation = document.getElementsByClassName("checkbox-input");
  const error = document.querySelector("#errorLocationTournois");

  var checkedTournoi = false;
  console.log(checkedLocation)
   for (var i = 0; i < checkedLocation.length; i++) {
      if ( checkedLocation[i].checked ) {
        checkedTournoi = true;
      }
    }


  if(checkedTournoi){
    error.style.display="none";
    return true;
  }

  console.log("error")

  error.style.display="block"
  error.innerHTML="Vous devez selectioner un tournoi"
  return false
}






// Clicked Conditions Validation
function checkAcceptConditions(event) {
  console.log('event:', event)

  const acceptConditionsChecked = document.querySelector("#checkbox1");
  const error = document.querySelector("#errorAcceptConditions");
  console.log(errorAcceptConditions)
  if(acceptConditionsChecked.checked){
    error.style.display="none"
    return true
}

console.log("error")
error.style.display="block"
error.innerHTML="Vous devez vérifier que vous acceptez les termes et conditions"
return false
}

//
function changeModal () {
console.log(modalBody)
  modalBody[0].innerHTML=""

const confirmation=document.createElement("div")
confirmation.innerText="Merci pour votre inscription"
confirmation.classList.add("confirmacion")
modalBody[0].appendChild(confirmation)

}

formulaire.addEventListener("click", () =>{
  event.preventDefault()
  if (validFirstName() && validSurname() && 
  validEmail() && inputDOB() && validNrTournois() && 
  confirmTournoi() && checkAcceptConditions() ) {
    console.log("hola Conditions")
    changeModal()
     }
  
})

