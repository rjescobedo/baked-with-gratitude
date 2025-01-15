const popupMessages = ['We’re offering a special Front Porch Pickup of freshly baked sourdough bread. Swing by to grab your loaf of artisan sourdough, made with care using a long fermentation process for incredible flavor and texture.', 'Fresh from our kitchen to your hands! Enjoy a special Front Porch Pickup of our handcrafted sourdough bread. Perfectly fermented for rich flavor and an irresistible crust.', 'Sourdough lovers, rejoice! Swing by our Front Porch Pickup and savor a freshly baked loaf of artisan sourdough, crafted with time and love for the ultimate taste experience.', 'Straight from the oven to you! Our artisan sourdough bread is ready for Front Porch Pickup. Don’t miss this opportunity to bring home the taste of homemade goodness.', 'Warm, crusty, and full of flavor! Treat yourself to a loaf of our slow-fermented sourdough bread with a special Front Porch Pickup today.', 'Your next meal just got better. Grab your freshly baked sourdough bread from our Front Porch Pickup and elevate your table with handcrafted deliciousness.', 'Perfectly baked for your enjoyment. Our sourdough bread is ready for Front Porch Pickup! Taste the difference of a slow fermentation process that brings out the best in every bite.', 'A loaf worth savoring! Stop by for Front Porch Pickup and take home a fresh sourdough masterpiece, baked to perfection with care and expertise.', 'Bread that brings comfort to your table. Enjoy the warmth of freshly baked sourdough bread with our convenient Front Porch Pickup option.', 'Take a moment for something truly special. Pick up a loaf of our artisan sourdough bread from our Front Porch today—handcrafted and baked fresh just for you.', 'Take a moment for something truly special. Pick up a loaf of our artisan sourdough bread from our Front Porch today—handcrafted and baked fresh just for you.'
];

document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const popupButton = document.getElementById("popupBtn");
    const pickupDate = document.getElementById("pickup-date");


    // Rotate through text for popup
    function rotatePopupText(messages) {
        const popupText = document.getElementById('popup-text');
        const randomIndex = Math.floor(Math.random() * messages.length);
        popupText.textContent = messages[randomIndex];
       // popupContent.append(popupText)
    }

    // Function to check if 12 hours have passed since the last popup
    function shouldShowPopup() {
        const lastPopupTime = localStorage.getItem("lastPopupTime");
        const currentTime = new Date().getTime();

        // If it's been more than 30 minutes (1800000 milliseconds)
        if (!lastPopupTime || currentTime - lastPopupTime > 1800000) {
            return true;
        }
        return false;
    }

    // Show the popup only if it's been more than 12 hours
    if (shouldShowPopup()) {
        setTimeout(() => {
            popup.style.display = "flex";
            rotatePopupText(popupMessages);
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