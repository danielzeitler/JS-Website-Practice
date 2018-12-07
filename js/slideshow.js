// Slideshow

const slideImg = document.querySelectorAll(".slideImg");
const allDots = document.querySelectorAll(".dot");
let slideNum = 0;
let autoplayTime = 3000;
let autoSlide;

showSlides(0);
autoplay();


allDots.forEach(function(dot, index){
	dot.addEventListener("click", function(){
		showSlides(index);
	})
});

slideImg.forEach(function(slide,index){
	slide.addEventListener("click", function(){
		nextSlide(showSlides);
	})
});

function reset(index) {
	slideImg.forEach(slide => slide.style.display = "none");
	allDots.forEach(dot => dot.classList.remove("active"));
}

function showSlides(index) {
	reset();
	slideImg[index].style.display = "block";
	allDots[index].classList.add("active");
}

function nextSlide() {
	slideNum++
	// Debug log
	console.log(slideNum);
	if(slideNum >= slideImg.length) {
		slideNum = 0;	
	}
	showSlides(slideNum);
}

function autoplay() {
	autoSlide = setInterval(nextSlide, autoplayTime);
}
