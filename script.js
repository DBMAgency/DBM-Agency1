/* =========================================================
   DIGITAL BOOST MARKETING AGENCY
   FINAL WEBSITE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector(".navbar");

    if (menuBtn && navbar) {

        menuBtn.addEventListener("click", function () {

            navbar.classList.toggle("show");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                if (navbar.classList.contains("show")) {

                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");

                } else {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        });


        /* Close menu after clicking a link */

        navbar.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("show");

                const icon = menuBtn.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            });

        });

    }



    /* =====================================================
       CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener("click", function (event) {

        if (!navbar || !menuBtn) {
            return;
        }

        if (
            navbar.classList.contains("show") &&
            !navbar.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            navbar.classList.remove("show");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });



    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const forms = document.querySelectorAll("[data-contact-form]");

    forms.forEach(function (form) {

        form.addEventListener("submit", async function (event) {

            event.preventDefault();


            /* Remove old messages */

            const oldSuccess =
                form.querySelector(".form-success");

            const oldError =
                form.querySelector(".form-error");

            if (oldSuccess) {
                oldSuccess.remove();
            }

            if (oldError) {
                oldError.remove();
            }


            /* Submit button */

            const submitButton =
                form.querySelector(".form-submit");


            if (!submitButton) {
                return;
            }


            const originalButtonHTML =
                submitButton.innerHTML;


            /* Validate */

            if (!form.checkValidity()) {

                form.reportValidity();

                return;

            }


            /* Loading */

            submitButton.disabled = true;

            submitButton.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';



            try {

                /* Get Formspree URL */

                let formAction =
                    form.getAttribute("action");


                if (
                    !formAction &&
                    typeof DIGITAL_BOOST_CONFIG !== "undefined"
                ) {

                    formAction =
                        DIGITAL_BOOST_CONFIG.formspree;

                }


                /* Safety check */

                if (!formAction) {

                    throw new Error(
                        "Form submission URL is missing."
                    );

                }


                /* Collect form data */

                const formData =
                    new FormData(form);


                /* Send to Formspree */

                const response =
                    await fetch(
                        formAction,
                        {
                            method: "POST",
                            body: formData,
                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                const result =
                    await response.json().catch(
                        function () {
                            return {};
                        }
                    );


                /* Successful submission */

                if (response.ok) {

                    const successMessage =
                        document.createElement("div");

                    successMessage.className =
                        "form-success";

                    successMessage.innerHTML =
                        '<i class="fa-solid fa-circle-check"></i> ' +
                        'Thank you! Your enquiry has been sent successfully. ' +
                        'Our team will contact you soon.';


                    form.prepend(successMessage);


                    /* Reset form */

                    form.reset();


                    /* Scroll to message */

                    successMessage.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });


                    /* Restore button */

                    submitButton.disabled = false;

                    submitButton.innerHTML =
                        originalButtonHTML;


                    /* Remove success message later */

                    setTimeout(function () {

                        if (
                            successMessage &&
                            successMessage.parentNode
                        ) {

                            successMessage.remove();

                        }

                    }, 8000);


                } else {

                    let errorText =
                        "Sorry, your message could not be sent. Please try again.";

                    if (
                        result &&
                        result.errors &&
                        result.errors.length
                    ) {

                        errorText =
                            result.errors
                                .map(function (error) {
                                    return error.message;
                                })
                                .join(" ");

                    }


                    showFormError(
                        form,
                        errorText
                    );


                    submitButton.disabled = false;

                    submitButton.innerHTML =
                        originalButtonHTML;

                }


            } catch (error) {

                console.error(
                    "Form submission error:",
                    error
                );


                showFormError(
                    form,
                    "Something went wrong. Please try again or contact us directly on WhatsApp."
                );


                submitButton.disabled = false;

                submitButton.innerHTML =
                    originalButtonHTML;

            }

        });

    });



    /* =====================================================
       FORM ERROR FUNCTION
    ===================================================== */

    function showFormError(form, message) {

        const errorMessage =
            document.createElement("div");

        errorMessage.className =
            "form-error";

        errorMessage.innerHTML =
            '<i class="fa-solid fa-circle-exclamation"></i> ' +
            message;


        form.prepend(errorMessage);


        errorMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }



    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener("click", function (event) {

                const targetID =
                    this.getAttribute("href");


                if (
                    !targetID ||
                    targetID === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetID);


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            });

        });



    /* =====================================================
       IMAGE ERROR HANDLING
    ===================================================== */

    document
        .querySelectorAll("img")
        .forEach(function (image) {

            image.addEventListener(
                "error",
                function () {

                    this.style.display = "none";

                }
            );

        });



    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    document
        .querySelectorAll(".navbar a")
        .forEach(function (link) {

            const href =
                link.getAttribute("href");


            if (!href) {
                return;
            }


            const linkPage =
                href.split("#")[0]
                   .split("/")
                   .pop()
                   .toLowerCase();


            if (
                linkPage === currentPage &&
                linkPage !== ""
            ) {

                link.classList.add("active");

            }

        });



    /* =====================================================
       ESC KEY CLOSE MOBILE MENU
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (
                    navbar &&
                    navbar.classList.contains("show")
                ) {

                    navbar.classList.remove("show");


                    const icon =
                        menuBtn
                            ? menuBtn.querySelector("i")
                            : null;


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


});
