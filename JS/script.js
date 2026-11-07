
/* =========================================
   EL SHABAKA LIBRARY - MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ===== DYNAMIC COPYRIGHT YEAR ===== */

    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* ===== MOBILE NAVIGATION ===== */

    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {

        function closeMobileMenu() {

            mainNav.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute("aria-label", "فتح القائمة");

            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

        }


        function toggleMobileMenu() {

            const isOpen = mainNav.classList.contains("active");

            mainNav.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", String(!isOpen));

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "فتح القائمة" : "إغلاق القائمة"
            );

            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-bars"></i>'
                : '<i class="fa-solid fa-xmark"></i>';

        }


        menuToggle.addEventListener("click", toggleMobileMenu);


        // Close menu after clicking any navigation link

        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", closeMobileMenu);

        });


        // Close menu when clicking outside

        document.addEventListener("click", function (event) {

            if (
                mainNav.classList.contains("active") &&
                !mainNav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                closeMobileMenu();

            }

        });


        // Close menu using Escape

        document.addEventListener("keydown", function (event) {

            if (
                event.key === "Escape" &&
                mainNav.classList.contains("active")
            ) {

                closeMobileMenu();

                menuToggle.focus();

            }

        });


        // Reset mobile menu when switching to desktop

        window.addEventListener("resize", function () {

            if (window.innerWidth > 768) {

                closeMobileMenu();

            }

        });

    }


    /* =========================================
       FLOATING WHATSAPP WIDGET
    ========================================= */

    const widget = document.getElementById("whatsappWidget");

    const trigger = document.getElementById("whatsappTrigger");

    const popup = document.getElementById("whatsappPopup");

    const closeBtn = document.getElementById("whatsappClose");


    // Verify that all widget elements exist

    if (!widget || !trigger || !popup || !closeBtn) {
        return;
    }


    // Open WhatsApp popup

    function openWhatsAppWidget() {

        widget.classList.add("is-open");

        trigger.setAttribute("aria-expanded", "true");

        popup.setAttribute("aria-hidden", "false");

    }


    // Close WhatsApp popup

    function closeWhatsAppWidget() {

        widget.classList.remove("is-open");

        trigger.setAttribute("aria-expanded", "false");

        popup.setAttribute("aria-hidden", "true");

    }


    // Toggle popup using floating button

    trigger.addEventListener("click", function () {

        const isOpen = widget.classList.contains("is-open");

        if (isOpen) {

            closeWhatsAppWidget();

        } else {

            openWhatsAppWidget();

        }

    });


    // Close popup using close button

    closeBtn.addEventListener("click", function () {

        closeWhatsAppWidget();

        trigger.focus();

    });


    // Close popup using Escape key

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            widget.classList.contains("is-open")
        ) {

            closeWhatsAppWidget();

            trigger.focus();

        }

    });


    // Close popup when clicking outside

    document.addEventListener("click", function (event) {

        if (
            widget.classList.contains("is-open") &&
            !widget.contains(event.target)
        ) {

            closeWhatsAppWidget();

        }

    });

});
