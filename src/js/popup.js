document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const popupButton = document.getElementById("popupBtn");

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

});
