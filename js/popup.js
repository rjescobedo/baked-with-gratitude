document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const popupButton = document.getElementById("popupBtn");
    const pickupDate = document.getElementById("pickup-date");


// Show the popup only once per visit
    const popupShown = localStorage.getItem("popupShown");

    if (!popupShown) {
        setTimeout(() => {
            popup.style.display = "flex";
            localStorage.setItem("popupShown", "true");
        }, 2000); 
    }

    // Close the popup when clicking the close button
    closePopup.addEventListener("click", () => {
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

    // Update the pickup date to every Thursday until the end of the year
    const today = new Date();
    const currentDayOfWeek = today.getDay();
    const daysUntilThursday = currentDayOfWeek === 4 ? 7 : (4 - currentDayOfWeek + 7) % 7;
    const nextThursday= new Date(today);
    nextThursday.setDate(today.getDate() + daysUntilThursday);
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const nextThursdayFormatted = nextThursday.toLocaleDateString('en-US', options);
    
    pickupDate.innerHTML += `<br>${nextThursdayFormatted}!`;

});
