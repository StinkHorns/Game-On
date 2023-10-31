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
if (closeModalBtn == null) throw new Error("No close button found");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeModalBtn.addEventListener("click", closeModal);

// close modal event
function closeModal() {
  console.log("in close modsal");
  if (modalbg == null) throw new Error("No Modal Background found");
  modalbg.style.display = "none";
} 

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


