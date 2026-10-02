document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       CURRENT YEAR
    ========================= */

    const year = document.querySelector("#year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }


    /* =========================
       MOBILE MENU
    ========================= */

    const toggle =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector("#primary-nav");


    if (toggle && nav) {

        toggle.addEventListener("click", () => {

            const expanded =
                toggle.getAttribute("aria-expanded") === "true";


            toggle.setAttribute(
                "aria-expanded",
                String(!expanded)
            );


            nav.classList.toggle(
                "open",
                !expanded
            );

        });

    }


    /* =========================
       CONTACT FORM
    ========================= */

    const form =
        document.querySelector("#contact-form");

    const status =
        document.querySelector("#form-status");


    if (form && status) {

        form.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                /* Check form validation */

                if (!form.checkValidity()) {

                    status.textContent =
                        "Please complete all required fields correctly.";

                    form.reportValidity();

                    return;
                }


                /* Success message */

                status.textContent =
                    "Thank you! Your message has been validated successfully. " +
                    "Connect this form to a backend or email service for real submissions.";


                form.reset();

            }
        );

    }

});