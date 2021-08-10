function slider (elem , prevArrow , nextArrow) {
	let hideItems = document.querySelectorAll(elem); //get all slider items
	let prev = document.querySelector(prevArrow); //prev
	let next = document.querySelector(nextArrow); //next
	let indexOfSlider = 0;

	//next button onclick
	next.onclick = nextSlide;

	//prev button onclick
	prev.onclick = prevSlide;


	//auto slide change
	// setInterval(nextSlide , 5000);


	function nextSlide() {

		//check next slide
		if (indexOfSlider >= hideItems.length - 1) {
			indexOfSlider = -1;
		}

		indexOfSlider++;
		hide(); //hide both parts
		show(); //show both parts
	}

	function prevSlide() {
		//check next slide
		if (indexOfSlider <= 0) {
			indexOfSlider = hideItems.length;
		}

		indexOfSlider--;
		hide(); //hide both parts
		show(); //show both parts
	}

	function hide() {
		//set hidden to left/right parts
		hideItems.forEach(current => {
			current.classList.add('hide');
		});
	}

	function show () {
		//show left part
		hideItems[indexOfSlider].classList.remove('hide');

	}
}

slider('.what-we-do-slider-item' , '.what-we-do-prev' , '.what-we-do-next');
slider('.our-work-slider-items' , '.our-work-prev' , '.our-work-next');