document.addEventListener("DOMContentLoaded", () => {
	const testimonials = document.querySelectorAll(".apply-testimonial");
	let currentIndex = 0;

	function showNextTestimonial() {
		testimonials[currentIndex].classList.remove("active");
		currentIndex = (currentIndex + 1) % testimonials.length;
		testimonials[currentIndex].classList.add("active");
	}

	// Initialize the first testimonial
	testimonials[currentIndex].classList.add("active");

	// Set interval to change testimonial every 3 seconds
	setInterval(showNextTestimonial, 3000);
});
