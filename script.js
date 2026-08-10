/* =========================================
   DIGITAL BOOST MARKETING AGENCY
   FINAL WEBSITE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       MOBILE MENU
    ===================================== */

    const menuButton =
        document.querySelector(".menu-btn");

    const navbar =
        document.querySelector(".navbar");

    if (menuButton && navbar) {

        menuButton.addEventListener(
            "click",
            function () {

                navbar.classList.toggle("active");

                const icon =
                    menuButton.querySelector("i");

                if (navbar.classList.contains("active")) {

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
        );


        /* Close menu after clicking a link */

        navbar.querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navbar.classList.remove(
                            "active"
                        );

                        const icon =
                            menuButton.querySelector("i");

                        icon.classList.remove(
                            "fa-xmark"
                        );

                        icon.classList.add(
                            "fa-bars"
                        );

                    }
                );

            });

    }


    /* =====================================
       ACTIVE NAVIGATION
    ===================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop() || "index.html";

    document.querySelectorAll(
        ".navbar a"
    ).forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (
            linkPage &&
            linkPage.split("#")[0] === currentPage
        ) {

            link.classList.add("active");

        }

    });


    /* =====================================
       CONTACT FORM
    ===================================== */

    const contactForm =
        document.querySelector(
            "[data-contact-form]"
        );

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function () {

                const submitButton =
                    contactForm.querySelector(
                        "[type='submit']"
                    );

                if (submitButton) {

                    submitButton.innerHTML =
                        '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

                    submitButton.disabled =
                        true;

                }

            }
        );

    }


    /* =====================================
       FAQ
    ===================================== */

    const faqItems =
        document.querySelectorAll(
            ".faq-item"
        );

    faqItems.forEach(function (item) {

        item.addEventListener(
            "toggle",
            function () {

                if (item.open) {

                    faqItems.forEach(
                        function (otherItem) {

                            if (
                                otherItem !== item
                            ) {

                                otherItem.removeAttribute(
                                    "open"
                                );

                            }

                        }
                    );

                }

            }
        );

    });


    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const revealElements =
        document.querySelectorAll(
            ".service-card, .service-page-card, .why-card, .portfolio-card, .value-card, .about-card"
        );

    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "show"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach(
            function (element) {

                observer.observe(element);

            }
        );

    }


    /* =====================================
       SMOOTH ANCHOR SCROLL
    ===================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");

                if (
                    targetId &&
                    targetId !== "#"
                ) {

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }

            }
        );

    });

});
