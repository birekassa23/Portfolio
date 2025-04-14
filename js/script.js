// <!-- JavaScript Code -->

    function confirmInfo() {
        var message = "Dear Viewers, please don't judge me from the provided information. It doesn't fully describe me, and that's the fault of my teenage years.";
        return confirm(message);
    }


    function sendEmail() {
        // Get form values
        const senderEmail = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Email details
        const recipient = "birekassa17828062@gmail.com"; // Replace with your email
        const subject = "Feedback from " + senderEmail;
        const body = `Message: ${message}\n\nSender Email: ${senderEmail}`;

        // Construct the mailto link
        const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open default email client
        window.location.href = mailtoLink;

        // Display success message only if email client opens
        setTimeout(() => {
            document.getElementById("successMessage").style.display = "block";
        }, 10); // Delay to simulate email opening

        // Clear form after showing success message
        document.getElementById("contactForm").reset();
    }

    // Get current hour of the day
    const currentHour = new Date().getHours();

    // Apply animations based on time of day
    const heroSection = document.querySelector('.hero');

    if (currentHour >= 6 && currentHour < 12) {
        heroSection.setAttribute('data-aos', 'fade-up'); // Morning: fade-up
    } else if (currentHour >= 12 && currentHour < 18) {
        heroSection.setAttribute('data-aos', 'zoom-in'); // Afternoon: zoom-in
    } else if (currentHour >= 18 && currentHour < 22) {
        heroSection.setAttribute('data-aos', 'flip-left'); // Evening: flip-left
    } else {
        heroSection.setAttribute('data-aos', 'fade-down'); // Night: fade-down
    }

AOS.init({
    duration: 1200,  // Animation duration
    easing: 'ease',  // Easing function for the animation
    once: true,      // Animation happens only once
  });