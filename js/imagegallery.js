// Image Gallery

const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;

imgs.forEach(img => img.addEventListener("click", imgClick));

imgs[0].style.opacity = opacity;

function imgClick(event){
	// Reset opacity of all the images
	imgs.forEach(img => img.style.opacity = 1);
	// Change current image to source of clicked image
	current.src = event.target.src;

	// Debug log
	console.log(current.src);

	// Add fade class
	current.classList.add("fade");

	// Remove fade-in class
	setTimeout(function(){
		current.classList.remove("fade")
	}, 500);

	// Change opacity to variable 
	event.target.style.opacity = opacity;
}