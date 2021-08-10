var setValue = function(elem, value, shift, speed){
    var interval = false; 
    interval = setInterval(function(){
        if (elem.innerHTML*1+shift >= value) {
            elem.innerHTML = value;
            clearInterval(interval);
        } else {
            elem.innerHTML = elem.innerHTML*1+shift;
        }
    }, speed);   
};
    

function start() {
	var result = document.getElementById("smooth-item-1");
	setValue(result, 42, 1, 300);

	result = document.getElementById("smooth-item-2");
	setValue(result, 123, 1, 300);

	result = document.getElementById("smooth-item-3");
	setValue(result, 15, 1, 300);

	result = document.getElementById("smooth-item-4");
	setValue(result, 99, 1, 300);

	result = document.getElementById("smooth-item-5");
	setValue(result, 24, 1, 300);
}

window.addEventListener('scroll' , (e) => {
	let a = Math.abs(document.querySelector('body').getBoundingClientRect().top - window.innerHeight + 100);
	let elem = document.querySelector('.smooth-numbers').offsetTop;

	if (a >= elem) {
		start();
	}
});