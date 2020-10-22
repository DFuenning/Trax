
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


	// Buy tickets select the ticket type on click
	$('#tire-tag-modal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var modalType = button.data('modal-type');
		var modal = $(this);
		modal.find('#modal-type').val(modalType);

	});

	$('#invacare-modal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var modalType = button.data('modal-type');
		var modal = $(this);
		modal.find('#modal-type').val(modalType);

	});
	$('#wireless-modal').on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var modalType = button.data('modal-type');
		var modal = $(this);
		modal.find('#modal-type').val(modalType);

	});

	// Init AOS
	function aos_init() {
		AOS.init({
			duration: 1000,
			once: true
		});
	}
	$(window).on('load', function () {
		aos_init();
	});


	!(function($) {
	// Smooth scroll for the navigation menu and links with .scrollto classes
	var scrolltoOffset = $('#header').outerHeight() - 1;
	$(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			if (target.length) {
				e.preventDefault();

				var scrollto = target.offset().top - scrolltoOffset;

				if ($(this).attr("href") == '#header') {
					scrollto = 0;
				}

				$('html, body').animate({
					scrollTop: scrollto
				}, 1500, 'easeInOutExpo');

				if ($(this).parents('.nav-menu, .mobile-nav').length) {
					$('.nav-menu .active, .mobile-nav .active').removeClass('active');
					$(this).closest('li').addClass('active');
				}

				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
					$('.mobile-nav-overly').fadeOut();
				}
				return false;
			}
		}
	});

	// Activate smooth scroll on page load with hash links in the url
	$(document).ready(function () {
		if (window.location.hash) {
			var initial_nav = window.location.hash;
			if ($(initial_nav).length) {
				var scrollto = $(initial_nav).offset().top - scrolltoOffset;
				$('html, body').animate({
					scrollTop: scrollto
				}, 1500, 'easeInOutExpo');
			}
		}
	});

	// Mobile Navigation
	if ($('.nav-menu').length) {
		var $mobile_nav = $('.nav-menu').clone().prop({
			class: 'mobile-nav d-lg-none'
		});
		$('body').append($mobile_nav);
		$('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
		$('body').append('<div class="mobile-nav-overly"></div>');

		$(document).on('click', '.mobile-nav-toggle', function (e) {
			$('body').toggleClass('mobile-nav-active');
			$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
			$('.mobile-nav-overly').toggle();
		});

		$(document).on('click', '.mobile-nav .drop-down > a', function (e) {
			e.preventDefault();
			$(this).next().slideToggle(300);
			$(this).parent().toggleClass('active');
		});

		$(document).click(function (e) {
			var container = $(".mobile-nav, .mobile-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
					$('.mobile-nav-overly').fadeOut();
				}
			}
		});
	} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
		$(".mobile-nav, .mobile-nav-toggle").hide();
	}

	// Navigation active state on scroll
	var nav_sections = $('section');
	var main_nav = $('.nav-menu, .mobile-nav');

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop() + 200;

		nav_sections.each(function () {
			var top = $(this).offset().top,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				if (cur_pos <= bottom) {
					main_nav.find('li').removeClass('active');
				}
				main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
			}
			if (cur_pos < 300) {
				$(".nav-menu ul:first li:first, .mobile-menu ul:first li:first").addClass('active');
			}
		});
	});

	// Toggle .header-scrolled class to #header when page is scrolled
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#header').addClass('header-scrolled');
		} else {
			$('#header').removeClass('header-scrolled');
		}
	});

	if ($(window).scrollTop() > 100) {
		$('#header').addClass('header-scrolled');
	}
 // Init AOS
 function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  }
  $(window).on('load', function() {
    aos_init();
  });
	})(jQuery);