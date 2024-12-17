(function () {
    "use strict";

    document.querySelectorAll('.contact-form').forEach(function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            let name = form.querySelector("input[name='name']").value.trim();
            let email = form.querySelector("input[name='email']").value.trim();
            let telephone = form.querySelector("input[name='telephone']").value.trim();
            let purpose = form.querySelector("select").value.trim();
            let message = form.querySelector("textarea[name='message']").value.trim();

            if (!name || !email || !telephone || !purpose || !message) {
                displayError(form, 'Please fill in all required fields.');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                displayError(form, 'Please enter a valid email address.');
                return;
            }

            if (!/^\d{10}$/.test(telephone)) {
                displayError(form, 'Please enter a valid contact number.');
                return;
            }

            form.querySelector('.loading').style.display = 'block';
            form.querySelector('.error-message').style.display = 'none';
            form.querySelector('.sent-message').style.display = 'none';

            sendMail(form);
        });
    });

    function sendMail(form) {
        let params = {
            name: form.querySelector("input[name='name']").value,
            email: form.querySelector("input[name='email']").value,
            telephone: form.querySelector("input[name='telephone']").value,
            purpose: form.querySelector("select").value,
            message: form.querySelector("textarea[name='message']").value,
        };

        emailjs.send("service_975uom8", "template_wisufk1", params).then(
            function (response) {
                console.log("Email sent successfully:", response);
                form.reset();

                form.querySelector('.loading').style.display = 'none';
                const sentMessageElement = form.querySelector('.sent-message');
                sentMessageElement.style.display = 'block';

                setTimeout(() => {
                    sentMessageElement.style.display = 'none';
                }, 5000);
            },
            function (error) {
                console.error("Email sending failed:", error);
                displayError(form, "There was an error while sending your message. Please try again later.");
                form.reset();
            }
        );
    }

    function displayError(form, error) {
        const errorMessageElement = form.querySelector('.error-message');
        form.querySelector('.loading').style.display = 'none';
        errorMessageElement.innerHTML = error;
        errorMessageElement.style.display = 'block';

        setTimeout(() => {
            errorMessageElement.style.display = 'none';
        }, 5000);
    }

})();
