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
            status.textContent = "Message sent successfully!";
            status.className = "success";
            form.reset();
        } else {
            status.textContent = "Failed to send message. Please try again.";
            status.className = "error";
        }
    } catch (error) {
        status.textContent = "An error occurred. Please try again.";
        status.className = "error";
    }
});
