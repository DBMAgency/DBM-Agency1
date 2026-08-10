/* =====================================================
   DIGITAL BOOST MARKETING AGENCY
   MAIN JAVASCRIPT
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       MOBILE NAVIGATION
    ================================================= */

    const menuButton = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    if (menuButton && navbar) {

        menuButton.addEventListener("click", function () {

            navbar.classList.toggle("mobile-active");

            const icon =
                menuButton.querySelector("i");

            if (icon) {

                if (
                    navbar.classList.contains("mobile-active")
                ) {

                    icon.classList.remove(
                        "fa-bars"
                    );

                    icon.classList.add(
                        "fa-xmark"
                    );

                } else {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            }

        });


        /* Close mobile menu after clicking link */

        navbar
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navbar.classList.remove(
                            "mobile-active"
                        );

                        const icon =
                            menuButton.querySelector("i");

                        if (icon) {

                            icon.classList.remove(
                                "fa-xmark"
                            );

                            icon.classList.add(
                                "fa-bars"
                            );

                        }

                    }
                );

            });

    }



    /* =================================================
       CONTACT FORM
    ================================================= */

    const contactForm =
        document.querySelector(
            "[data-contact-form]"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                const name =
                    document
                        .getElementById("name");

                const email =
                    document
                        .getElementById("email");

                const whatsapp =
                    document
                        .getElementById("whatsapp");

                const service =
                    document
                        .getElementById("service");

                const message =
                    document
                        .getElementById("message");


                /* -----------------------------------------
                   Basic Validation
                ----------------------------------------- */

                if (
                    !name ||
                    !email ||
                    !whatsapp ||
                    !service ||
                    !message
                ) {

                    return;

                }


                if (
                    name.value.trim().length < 2
                ) {

                    event.preventDefault();

                    alert(
                        "Please enter your full name."
                    );

                    name.focus();

                    return;

                }


                if (
                    !email.value.includes("@") ||
                    !email.value.includes(".")
                ) {

                    event.preventDefault();

                    alert(
                        "Please enter a valid email address."
                    );

                    email.focus();

                    return;

                }


                if (
                    whatsapp.value.trim().length < 7
                ) {

                    event.preventDefault();

                    alert(
                        "Please enter a valid WhatsApp number."
                    );

                    whatsapp.focus();

                    return;

                }


                if (
                    service.value === ""
                ) {

                    event.preventDefault();

                    alert(
                        "Please select the service you need."
                    );

                    service.focus();

                    return;

                }


                if (
                    message.value.trim().length < 10
                ) {

                    event.preventDefault();

                    alert(
                        "Please tell us a little more about your project."
                    );

                    message.focus();

                    return;

                }


                /* -----------------------------------------
                   Submit Button
                ----------------------------------------- */

                const submitButton =
                    contactForm.querySelector(
                        'button[type="submit"]'
                    );


                if (submitButton) {

                    submitButton.disabled = true;

                    submitButton.innerHTML =
                        '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

                }

            }
        );

    }



    /* =================================================
       SMOOTH SCROLLING
    ================================================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetID =
                        link.getAttribute("href");

                    if (
                        !targetID ||
                        targetID === "#"
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetID
                        );


                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }
            );

        });



    /* =================================================
       CURRENT YEAR
    ================================================= */

    const yearElements =
        document.querySelectorAll(
            "[data-year]"
        );


    yearElements.forEach(
        function (element) {

            element.textContent =
                new Date().getFullYear();

        }
    );



    /* =================================================
       ACTIVE NAVIGATION
    ================================================= */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    const navLinks =
        document.querySelectorAll(
            ".navbar a"
        );


    navLinks.forEach(
        function (link) {

            const linkPage =
                link
                    .getAttribute("href")
                    ?.split("/")
                    .pop();


            if (
                linkPage === currentPage &&
                linkPage !== ""
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );



    /* =================================================
       ESC KEY CLOSE MOBILE MENU
    ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                navbar
            ) {

                navbar.classList.remove(
                    "mobile-active"
                );


                if (menuButton) {

                    const icon =
                        menuButton.querySelector(
                            "i"
                        );

                    if (icon) {

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }

                }

            }

        }
    );



    /* =================================================
       ADD LOADED CLASS
    ================================================= */

    document.body.classList.add(
        "page-loaded"
    );


});
