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



// Contact Form — Web3Forms Integration
(function () {
    "use strict";

    const form = document.getElementById('contactForm');
    if (!form) return;

    const panel = document.getElementById('contactFormPanel');
    const statusEl = document.getElementById('contactFormStatus');
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnLabel = submitBtn.querySelector('.btn-label');
    const btnSending = submitBtn.querySelector('.btn-sending');
    const successPanel = document.getElementById('contactSuccessPanel');
    const successGreeting = document.getElementById('successGreeting');
    const sendAnotherBtn = document.getElementById('sendAnotherBtn');
    const formTitle = document.getElementById('contactFormTitle');
    const confettiLayer = successPanel ? successPanel.querySelector('.success-confetti') : null;

    // A little variety so a repeat visitor doesn't see the exact same line twice
    const greetings = [
        "You're all set!",
        "Message sent!",
        "Thanks a ton!",
        "We've got it!",
        "Got your message!"
    ];

    function setLoading(isLoading) {
        submitBtn.disabled = isLoading;
        btnLabel.classList.toggle('d-none', isLoading);
        btnSending.classList.toggle('d-none', !isLoading);
    }

    function launchConfetti() {
        if (!confettiLayer) return;
        confettiLayer.innerHTML = '';
        const colors = ['#FFC107', '#3FAE6B', '#0d6efd', '#FF6B6B', '#8E44AD'];
        const pieceCount = 24;
        for (let i = 0; i < pieceCount; i++) {
            const piece = document.createElement('span');
            const angle = (Math.PI * 2 * i) / pieceCount + Math.random() * 0.3;
            const distance = 90 + Math.random() * 90;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance - 40; // bias upward
            piece.style.setProperty('--confetti-end', `translate(${x}px, ${y}px)`);
            piece.style.setProperty('--confetti-spin', `${(Math.random() * 540 - 270)}deg`);
            piece.style.background = colors[i % colors.length];
            piece.style.animationDelay = `${Math.random() * 0.15}s`;
            confettiLayer.appendChild(piece);
        }
    }

    function showSuccess() {
        if (!successPanel) return;
        successGreeting.textContent = greetings[Math.floor(Math.random() * greetings.length)];

        form.classList.add('form-exit');
        setTimeout(() => {
            form.classList.add('d-none');
            if (formTitle) formTitle.classList.add('d-none');
            successPanel.classList.remove('d-none');
            launchConfetti();
        }, 350);
    }

    if (sendAnotherBtn) {
        sendAnotherBtn.addEventListener('click', function () {
            successPanel.classList.add('d-none');
            form.classList.remove('d-none');
            if (formTitle) formTitle.classList.remove('d-none');
            void form.offsetWidth;
            form.classList.remove('form-exit');
        });
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            if (panel) {
                panel.classList.remove('shake-error');
                void panel.offsetWidth;
                panel.classList.add('shake-error');
            }
            return;
        }

        setLoading(true);
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
                    form.reset();
                    form.classList.remove('was-validated');
                    showSuccess();
                } else {
                    statusEl.textContent = "Something went wrong. Please try again or email us directly.";
                    statusEl.className = "text-danger mt-2";
                    if (panel) {
                        panel.classList.remove('shake-error');
                        void panel.offsetWidth;
                        panel.classList.add('shake-error');
                    }
                }
            })
            .catch(() => {
                statusEl.textContent = "Network error. Please check your connection and try again.";
                statusEl.className = "text-danger mt-2";
                if (panel) {
                    panel.classList.remove('shake-error');
                    void panel.offsetWidth;
                    panel.classList.add('shake-error');
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, false);

})();


// Job Application Form Validation
// Job Application Form — Web3Forms Integration
(function () {
    "use strict";

    const form = document.getElementById('jobApplicationForm');
    if (!form) return;

    const panel = document.getElementById('jobFormPanel');
    const heading = document.getElementById('jobFormHeading');
    const statusEl = document.getElementById('formStatus');
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnLabel = submitBtn.querySelector('.btn-label');
    const btnSending = submitBtn.querySelector('.btn-sending');
    const successPanel = document.getElementById('jobSuccessPanel');
    const successGreeting = document.getElementById('jobSuccessGreeting');
    const sendAnotherBtn = document.getElementById('jobSendAnotherBtn');
    const confettiLayer = successPanel ? successPanel.querySelector('.success-confetti') : null;

    const greetings = [
        "Application received!",
        "You're in the queue!",
        "Thanks for applying!",
        "Got your application!",
        "All set — thank you!"
    ];

    function setLoading(isLoading) {
        submitBtn.disabled = isLoading;
        btnLabel.classList.toggle('d-none', isLoading);
        btnSending.classList.toggle('d-none', !isLoading);
    }

    function launchConfetti() {
        if (!confettiLayer) return;
        confettiLayer.innerHTML = '';
        const colors = ['#FFC107', '#3FAE6B', '#0d6efd', '#FF6B6B', '#8E44AD'];
        const pieceCount = 24;
        for (let i = 0; i < pieceCount; i++) {
            const piece = document.createElement('span');
            const angle = (Math.PI * 2 * i) / pieceCount + Math.random() * 0.3;
            const distance = 90 + Math.random() * 90;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance - 40;
            piece.style.setProperty('--confetti-end', `translate(${x}px, ${y}px)`);
            piece.style.setProperty('--confetti-spin', `${(Math.random() * 540 - 270)}deg`);
            piece.style.background = colors[i % colors.length];
            piece.style.animationDelay = `${Math.random() * 0.15}s`;
            confettiLayer.appendChild(piece);
        }
    }

    function showSuccess() {
        if (!successPanel) return;
        successGreeting.textContent = greetings[Math.floor(Math.random() * greetings.length)];

        form.classList.add('form-exit');
        setTimeout(() => {
            form.classList.add('d-none');
            if (heading) heading.classList.add('d-none');
            successPanel.classList.remove('d-none');
            launchConfetti();
        }, 350);
    }

    if (sendAnotherBtn) {
        sendAnotherBtn.addEventListener('click', function () {
            successPanel.classList.add('d-none');
            form.classList.remove('d-none');
            if (heading) heading.classList.remove('d-none');
            void form.offsetWidth;
            form.classList.remove('form-exit');
        });
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            if (panel) {
                panel.classList.remove('shake-error');
                void panel.offsetWidth;
                panel.classList.add('shake-error');
            }
            return;
        }

        setLoading(true);
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
                    form.reset();
                    form.classList.remove('was-validated');
                    showSuccess();
                } else {
                    statusEl.textContent = "Something went wrong. Please try again or email us directly.";
                    statusEl.className = "text-danger mt-3";
                    if (panel) {
                        panel.classList.remove('shake-error');
                        void panel.offsetWidth;
                        panel.classList.add('shake-error');
                    }
                }
            })
            .catch(() => {
                statusEl.textContent = "Network error. Please check your connection and try again.";
                statusEl.className = "text-danger mt-3";
                if (panel) {
                    panel.classList.remove('shake-error');
                    void panel.offsetWidth;
                    panel.classList.add('shake-error');
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, false);

})();

// Announcement bar — dismiss for current view only, reappears on refresh
(function () {
    "use strict";

    const bar = document.getElementById("announcementBar");
    const closeBtn = document.getElementById("announcementClose");
    if (!bar || !closeBtn) return;

    closeBtn.addEventListener("click", function () {
        bar.classList.add("hide");
        setTimeout(function () {
            bar.style.display = "none";
        }, 400);
    });
})();