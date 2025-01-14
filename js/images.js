document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("main-image");
    const mainImageCaption = document.getElementById("main-image-caption");
    const smallImages = document.querySelectorAll(".small-image");

    smallImages.forEach((smallImage) => {
        smallImage.addEventListener("click", () => {
            // Fade out the main image
            mainImage.style.opacity = "0";

            // After the fade-out animation, change the image
            setTimeout(() => {
                mainImage.src = smallImage.src;
                mainImage.alt = smallImage.alt;
                mainImageCaption.textContent = mainImage.alt;

                // Fade in the main image
                mainImage.style.opacity = "1";
            }, 300); // Match this to the CSS transition duration
        });
    });
});



