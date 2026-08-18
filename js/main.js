// (function ($) {
//     "use strict";

//     // Spinner
//     var spinner = function () {
//         setTimeout(function () {
//             if ($('#spinner').length > 0) {
//                 $('#spinner').removeClass('show');
//             }
//         }, 1);
//     };
//     spinner(0);


//     // Initiate the wowjs
//     new WOW().init();


//     // Sticky Navbar
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 45) {
//             $('.nav-bar').addClass('sticky-top shadow-sm').css('top', '0px');
//         } else {
//             $('.nav-bar').removeClass('sticky-top shadow-sm').css('top', '-100px');
//         }
//     });


//     // Header carousel
//     $(".header-carousel").owlCarousel({
//         animateOut: 'fadeOut',
//         items: 1,
//         margin: 0,
//         stagePadding: 0,
//         autoplay: true,
//         smartSpeed: 500,
//         dots: true,
//         loop: true,
//         nav: true,
//         navText: [
//             '<i class="bi bi-arrow-left"></i>',
//             '<i class="bi bi-arrow-right"></i>'
//         ],
//     });

//     // testimonial carousel
//     $(".testimonial-carousel").owlCarousel({
//         autoplay: true,
//         smartSpeed: 1500,
//         center: false,
//         dots: false,
//         loop: true,
//         margin: 25,
//         nav : true,
//         navText : [
//             '<i class="fa fa-arrow-right"></i>',
//             '<i class="fa fa-arrow-left"></i>'
//         ],
//         responsiveClass: true,
//         responsive: {
//             0:{
//                 items:1
//             },
//             576:{
//                 items:1
//             },
//             768:{
//                 items:2
//             },
//             992:{
//                 items:2
//             },
//             1200:{
//                 items:2
//             }
//         }
//     });

//     // Facts counter
//     $('[data-toggle="counter-up"]').counterUp({
//         delay: 5,
//         time: 2000
//     });


//     // Back to top button
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 300) {
//             $('.back-to-top').fadeIn('slow');
//         } else {
//             $('.back-to-top').fadeOut('slow');
//         }
//     });
//     $('.back-to-top').click(function () {
//         $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
//         return false;
//     });


// })(jQuery);
(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top shadow-sm').css('top', '0px');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow-sm').css('top', '-100px');
        }
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 500,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-arrow-left"></i>',
            '<i class="fa fa-arrow-right"></i>'
        ],
    });


    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
            '<i class="fa fa-arrow-right"></i>',
            '<i class="fa fa-arrow-left"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);


// Clients carousel
$(".clients-carousel").owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    smartSpeed: 800,
    autoplayTimeout: 3000,
    dots: true,
    nav: false,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        992: {
            items: 5
        },
        1200: {
            items: 6
        }
    }
});


// Job Application Form Validation
// Job Application Form — Web3Forms Integration
(function () {
    "use strict";

    const form = document.getElementById('jobApplicationForm');
    if (!form) return;

    const statusEl = document.getElementById('formStatus');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // Bootstrap validation check
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        // UI: loading state
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Submitting...';
        statusEl.textContent = '';
        statusEl.className = '';

        const formData = new FormData(form);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    statusEl.textContent = "Thank you! Your application has been submitted successfully. We'll be in touch shortly.";
                    statusEl.className = "text-success mt-3";
                    form.reset();
                    form.classList.remove('was-validated');
                } else {
                    statusEl.textContent = "Something went wrong. Please try again or email us directly.";
                    statusEl.className = "text-danger mt-3";
                }
            })
            .catch(() => {
                statusEl.textContent = "Network error. Please check your connection and try again.";
                statusEl.className = "text-danger mt-3";
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            });
    }, false);

})();


// Contact Form — Web3Forms Integration
(function () {
    "use strict";

    const form = document.getElementById('contactForm');
    if (!form) return;

    const statusEl = document.getElementById('contactFormStatus');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        const originalBtnText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
        statusEl.textContent = '';
        statusEl.className = '';

        const formData = new FormData(form);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    statusEl.textContent = "Thank you! Your message has been sent successfully.";
                    statusEl.className = "text-success mt-2";
                    form.reset();
                    form.classList.remove('was-validated');
                } else {
                    statusEl.textContent = "Something went wrong. Please try again or email us directly.";
                    statusEl.className = "text-danger mt-2";
                }
            })
            .catch(() => {
                statusEl.textContent = "Network error. Please check your connection and try again.";
                statusEl.className = "text-danger mt-2";
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            });
    }, false);

})();
