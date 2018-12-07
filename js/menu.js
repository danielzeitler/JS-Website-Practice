// Responsive Menu
let menuIcon = document.querySelector("#menue-icon");
let closeIcon = document.querySelector("#close-icon");
let nav = document.querySelector(".navigation ul");

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