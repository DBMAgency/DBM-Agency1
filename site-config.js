/* =====================================================
   DIGITAL BOOST MARKETING AGENCY
   WEBSITE CONFIGURATION
   ===================================================== */

const DIGITAL_BOOST_CONFIG = {

    /* ==============================
       BUSINESS INFORMATION
    ============================== */

    businessName: "Digital Boost Marketing Agency",

    phone: "03252010866",

    whatsappNumber: "923252010866",

    email: "contect.digitalboost@gmail.com",

    country: "Pakistan",


    /* ==============================
       SOCIAL MEDIA
    ============================== */

    facebook:
        "https://www.facebook.com/digitalboostagencyinfo",

    instagram:
        "https://www.instagram.com/dig.italboostagency/",


    /* ==============================
       WHATSAPP
    ============================== */

    whatsappMessage:
        "Hello Digital Boost Marketing Agency, I would like to discuss your digital marketing services.",


    /* ==============================
       WEBSITE
    ============================== */

    websiteName:
        "Digital Boost Marketing Agency",

    tagline:
        "Digital Marketing That Drives Growth.",


    /* ==============================
       COPYRIGHT
    ============================== */

    copyrightYear:
        "2026"

};



/* =====================================================
   WHATSAPP LINKS
===================================================== */

const whatsappURL =
    "https://wa.me/" +
    DIGITAL_BOOST_CONFIG.whatsappNumber +
    "?text=" +
    encodeURIComponent(
        DIGITAL_BOOST_CONFIG.whatsappMessage
    );



/* =====================================================
   APPLY WHATSAPP LINKS
===================================================== */

document
    .querySelectorAll("[data-whatsapp]")
    .forEach(function(element) {

        element.href = whatsappURL;

    });



/* =====================================================
   APPLY FACEBOOK LINK
===================================================== */

document
    .querySelectorAll("[data-facebook]")
    .forEach(function(element) {

        element.href =
            DIGITAL_BOOST_CONFIG.facebook;

    });



/* =====================================================
   APPLY INSTAGRAM LINK
===================================================== */

document
    .querySelectorAll("[data-instagram]")
    .forEach(function(element) {

        element.href =
            DIGITAL_BOOST_CONFIG.instagram;

    });



/* =====================================================
   APPLY EMAIL
===================================================== */

document
    .querySelectorAll("[data-email]")
    .forEach(function(element) {

        element.href =
            "mailto:" +
            DIGITAL_BOOST_CONFIG.email;

    });



document
    .querySelectorAll("[data-email-text]")
    .forEach(function(element) {

        element.textContent =
            DIGITAL_BOOST_CONFIG.email;

    });



/* =====================================================
   APPLY WHATSAPP NUMBER TEXT
===================================================== */

document
    .querySelectorAll("[data-whatsapp-text]")
    .forEach(function(element) {

        element.textContent =
            DIGITAL_BOOST_CONFIG.phone;

    });



/* =====================================================
   COPYRIGHT YEAR
===================================================== */

document
    .querySelectorAll("[data-year]")
    .forEach(function(element) {

        element.textContent =
            DIGITAL_BOOST_CONFIG.copyrightYear;

    });
