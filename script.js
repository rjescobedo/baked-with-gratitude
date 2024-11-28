//This function closes the navbar when clicked outside or when a nav-item has been clicked
document.addEventListener('DOMContentLoaded', () => {
  const navbarCollapse = document.querySelector('.navbar-collapse'); // Collapsible navbar
  const navbarToggler = document.querySelector('.navbar-toggler'); // Navbar toggle button
  const navItems = document.querySelectorAll('.nav-item'); // All nav items

  // Function to close the navbar programmatically
  const closeNavbar = () => {
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click(); // Use Bootstrap's toggler to close it
    }
  };

  // Close navbar when a nav-item is clicked
  navItems.forEach((item) => {
    item.addEventListener('click', closeNavbar);
  });

  // Close navbar when clicking outside of it
  document.addEventListener('click', (event) => {
    const isClickInside = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
    if (!isClickInside) {
      closeNavbar();
    }
  });
});

//Contact Form JS
// Replace the EmailJS user ID and service/template IDs with your credentials
// Initialize EmailJS
(function () {
  // Replace 'YOUR_EMAILJS_USER_ID' with your actual EmailJS user ID
  emailjs.init("raul.escobedo1012@gmail.com");
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("status");

// Form submission handler
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from reloading the page

  // Collect form data
  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  // Replace these with your EmailJS service ID and template ID
  const serviceID = "service_dsqwk4h";
  const templateID = "template_rv4d86d";

  // Send form data using EmailJS
  emailjs
    .send(serviceID, templateID, formData)
    .then(
      function (response) {
        // On success
        status.textContent = "Message sent successfully!";
        status.className = "success";
        form.reset(); // Clear the form
      },
      function (error) {
        // On error
        status.textContent = "Failed to send message. Please try again.";
        status.className = "error";
      }
    );
});



  
  
