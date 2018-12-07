
// Responsive Menu

const menuIcon = document.querySelector("#menue-icon");
const closeIcon = document.querySelector("#close-icon");
const nav = document.querySelector(".navigation ul");


// Debug log
console.log(menuIcon);
console.log(closeIcon);


// Event Listener
menuIcon.addEventListener("click", openNav);
closeIcon.addEventListener("click", openNav);

function openNav(e){
	// Displaying close icon
	closeIcon.style.display = "block";

	// Validating open and close nav
	if(nav.style.display === "block") {
		nav.style.display = "none";
		closeIcon.style.display = "none"
		menuIcon.style.display = "block";

	} else {
		nav.style.display = "block";
		menuIcon.style.display = "none";
	}
}

// Scroll to top

let myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", backToTop);

window.onscroll = function() {
	scrollFunction();
};

function scrollFunction(){
	if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		myBtn.style.display = "block";
	} else {
		myBtn.style.display = "none";
	}
}

function backToTop() {
	let timer = setInterval(function(){
		if(window.scrollY > 0) {
			window.scrollBy(0, -50);
		} else {
			clearInterval(timer);
		}
	}, 10);
}

// Register Form Start

let registerForm = document.getElementById("newsletter");
let emailInput = document.forms["myForm"]["email"];
let emailError = document.querySelector(".errorMessage");
let successMessage = document.querySelector(".successMessage");

// Debug log
console.log(registerForm);

emailInput.addEventListener("blur", emailVerify); 
emailInput.addEventListener("blur", checkMail); 
emailInput.addEventListener("keyup", emailVerify); 
registerForm.addEventListener("submit", validation);

function validation(e) {
	e.preventDefault();
	checkMail();
	return false;
}

function checkMail() {
	// Debug log
	console.log(emailInput.value);

	var regexMail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
	if(regexMail.test(emailInput.value)) {
		emailInput.style.border = "2px solid #f1f1f1";
		emailError.textContent = "";
		successMessage.textContent = "E-Mail is correct";
		return true;
	} else {
		emailInput.style.border = "2px solid red";
		emailError.textContent = "Please enter a valid E-Mail";
		successMessage.textContent = "";
		return false;
	}
}

function emailVerify() {
	checkMail();
	if(emailInput.value != ""){
		emailInput.style.border = "2px solid #f1f1f1";
		emailError.textContent = "";
		return true;
	} else {
		emailInput.style.border = "1px solid red";
		emailError.textContent = "Please enter a valid E-Mail";
	}
}











