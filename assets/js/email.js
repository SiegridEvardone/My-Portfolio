// Initialize EmailJS with your User ID
emailjs.init("h9KlhHdqGYC2FSwIq"); // Replace "YOUR_USER_ID" with your EmailJS User ID

// Add an event listener to the form
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send the form data using EmailJS
    emailjs.sendForm("service_4gse4hv", "template_46r60un", "#contact-form")
        .then(function() {
            alert("Your email has been sent successfully!");
        })
        .catch(function(error) {
            console.error("Error:", error);
            alert("Failed to send the email. Please try again later.");
        });
});
