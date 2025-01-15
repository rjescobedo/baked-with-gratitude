//Contact Form
const form = document.getElementById("contact-form");
form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    const status = document.getElementById("status");

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            status.textContent = "🎉 Thank you for reaching out! Your message has been sent successfully. We’ll get back to you as soon as possible. ";
            status.className = "success";
            form.reset();
        } else {
            status.textContent = "Oops! Something went wrong, and we couldn’t send your message. Please try again, or contact us directly at bakedwithgratitude@gmai.com. We’re here to help!";
            status.className = "error";
        }
    } catch (error) {
        status.textContent = "An error occurred. Please try again.";
        status.className = "error";
    }
});
