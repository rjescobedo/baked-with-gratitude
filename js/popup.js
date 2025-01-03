document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const popupButton = document.getElementById("popupBtn");
    const pickupDate = document.getElementById("pickup-date");

    // Show the popup when the page loads
    setTimeout(() => {
        popup.style.display = "flex";
    }, 2000); // Delay popup by 2 second

    // Close the popup when clicking the close button
    closePopup.addEventListener("click", () => {
        event.stopPropagation();
        popup.style.display = "none";
    });

    // Close the popup when clicking the popup button
    popupButton.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Close the popup when clicking outside the popup content
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });

    // Update the pickup date to every Friday until the end of the year
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
    const currentDayOfWeek = today.getDay();
    const daysUntilFriday = 5 - currentDayOfWeek;
    const nextFriday = new Date(currentYear, currentMonth, currentDay + daysUntilFriday);
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const nextFridayFormatted = nextFriday.toLocaleDateString('en-US', options);
    
    pickupDate.innerHTML += `<br>${nextFridayFormatted}!`;

});
