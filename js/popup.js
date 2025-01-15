document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const popupButton = document.getElementById("popupBtn");
    const pickupDate = document.getElementById("pickup-date");

    // Function to check if 12 hours have passed since the last popup
    function shouldShowPopup() {
        const lastPopupTime = localStorage.getItem("lastPopupTime");
        const currentTime = new Date().getTime();

        // If it's been more than 30 minutes
        if (!lastPopupTime || currentTime - lastPopupTime > 1800000) {
            return true;
        }
        return false;
    }

    // Show the popup only if it's been more than 12 hours
    if (shouldShowPopup()) {
        setTimeout(() => {
            popup.style.display = "flex";
            // Save the current time as the last popup time
            localStorage.setItem("lastPopupTime", new Date().getTime());
        }, 3000); // Popup appears after 3000ms (3 seconds)
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
    const nextThursday = new Date(today);
    nextThursday.setDate(today.getDate() + daysUntilThursday);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const nextThursdayFormatted = nextThursday.toLocaleDateString('en-US', options);

    pickupDate.innerHTML += `<br>${nextThursdayFormatted}!`;
});