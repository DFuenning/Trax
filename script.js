const counters = document.querySelectorAll('.counter');
const speed = 1000000000;

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;



		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + inc;
			// Call function every ms
			setTimeout(updateCount, 100);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
//* Navbar Fixed  
var nav_offset_top = $('#header').height()+50; 

function navbarFixed() {
	if ($('.fixed-top').length) {
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();
			if (scroll >= nav_offset_top) {
				$(".fixed-top").addClass("navbar_fixed");
			} else {
				$(".fixed-top").removeClass("navbar_fixed");
			}
		});
	};
};
navbarFixed();