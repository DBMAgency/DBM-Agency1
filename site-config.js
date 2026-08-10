/* =========================================
   DIGITAL BOOST MARKETING AGENCY
   FINAL WEBSITE CONFIGURATION
========================================= */

const SITE_CONFIG = {

    /* Business */
    businessName: "Digital Boost Marketing Agency",

    phone: "03252010866",

    email: "contect.digitalboost@gmail.com",

    location: "Pakistan",

    /* Social Media */
    facebook:
        "https://www.facebook.com/digitalboostagencyinfo",

    instagram:
        "https://www.instagram.com/dig.italboostagency/",

    /* LinkedIn
       No LinkedIn link was provided.
       It will remain hidden automatically.
    */
    linkedin: "",

    /* WhatsApp */
    whatsappNumber: "923252010866",

    whatsappMessage:
        "Hello Digital Boost Marketing Agency, I would like to discuss my business and digital marketing requirements.",

    /* Contact Form */
    formspree:
        "https://formspree.io/f/xgawojwd",

    /* Business Information */
    workingHours:
        "Monday - Saturday | 9:00 AM - 8:00 PM",

    country:
        "Pakistan",

    /* Website */
    year:
        "2026"

};


/* =========================================
   WHATSAPP URL
========================================= */

SITE_CONFIG.whatsappURL =
    "https://wa.me/" +
    SITE_CONFIG.whatsappNumber +
    "?text=" +
    encodeURIComponent(
        SITE_CONFIG.whatsappMessage
    );


/* =========================================
   AUTO INSERT WEBSITE INFORMATION
========================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* WhatsApp Links */

    document.querySelectorAll(
        "[data-whatsapp]"
    ).forEach(function (element) {

        element.href =
            SITE_CONFIG.whatsappURL;

    });


    /* WhatsApp Text */

    document.querySelectorAll(
        "[data-whatsapp-text]"
    ).forEach(function (element) {

        element.textContent =
            SITE_CONFIG.phone;

    });


    /* Email Links */

    document.querySelectorAll(
        "[data-email]"
    ).forEach(function (element) {

        element.href =
            "mailto:" +
            SITE_CONFIG.email;

    });


    /* Email Text */

    document.querySelectorAll(
        "[data-email-text]"
    ).forEach(function (element) {

        element.textContent =
            SITE_CONFIG.email;

    });


    /* Facebook */

    document.querySelectorAll(
        "[data-facebook]"
    ).forEach(function (element) {

        element.href =
            SITE_CONFIG.facebook;

    });


    /* Instagram */

    document.querySelectorAll(
        "[data-instagram]"
    ).forEach(function (element) {

        element.href =
            SITE_CONFIG.instagram;

    });


    /* LinkedIn */

    document.querySelectorAll(
        "[data-linkedin]"
    ).forEach(function (element) {

        if (SITE_CONFIG.linkedin) {

            element.href =
                SITE_CONFIG.linkedin;

        } else {

            element.style.display =
                "none";

        }

    });


    /* Contact Form */

    document.querySelectorAll(
        "[data-contact-form]"
    ).forEach(function (form) {

        form.action =
            SITE_CONFIG.formspree;

    });


    /* Business Name */

    document.querySelectorAll(
        "[data-business-name]"
    ).forEach(function (element) {

        element.textContent =
            SITE_CONFIG.businessName;

    });


    /* Current Year */

    document.querySelectorAll(
        "[data-year]"
    ).forEach(function (element) {

        element.textContent =
            SITE_CONFIG.year;

    });

});
