//This function closes the navbar when clicked outside or when a nav-item has been clicked
document.addEventListener('DOMContentLoaded', () => {
  const navbarNav = document.getElementById('navbarNav');
  const navbarCollapse = new bootstrap.Collapse(navbarNav, { toggle: false });
  const navItems = document.querySelectorAll('.nav-item');

  // Function to close the navbar
  const closeNavbar = () => {
      if (navbarNav.classList.contains('show')) {
          navbarCollapse.hide();
      }
  };

  // Add click event listeners to nav-items
  navItems.forEach(navItem => {
      navItem.addEventListener('click', () => {
          closeNavbar();
      });
  });

  // Functionality for custom hamburger
  $(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });

  // Update Copyright year dynamically
  const currentYear = new Date().getFullYear();

  document.getElementById('copyright-year').textContent = currentYear;
});

  
  
