let header = document.querySelector('#fixed-nav');
let burgerMenu = document.querySelector('.menu__btn');

window.addEventListener('scroll' , (e) => {
	navbarScroll();
});

navbarScroll();

function navbarScroll() {
	if (document.body.getBoundingClientRect().top < 0) {
		header.style.background = 'rgba(0,0,0,.83)';
	} else {
		header.style.background = 'rgba(255 , 255 , 255 ,0)';
	}
}

