window.addEventListener('scroll' , lazyLoad);
window.addEventListener('load' , lazyLoad);

function lazyLoad() {
	element = document.querySelectorAll('.lazy-load');//get all lazyload elem 

	//every elem with lazy-load class can do it
	for (let key in element) {
		let a = Math.abs(document.querySelector('body').getBoundingClientRect().top - window.innerHeight + 300); //a = current body height
		
		//if current height = elem height
		if (a >= element[key].offsetTop) {
			element[key].style.marginLeft = 0; // elem margin left = 0
			element[key].style.opacity = 1; //elem opacity = 1
		}
	};
};
