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



  
  
