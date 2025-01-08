document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("main-image");
    const mainImageCaption = document.getElementById("main-image-caption");
    const smallImages = document.querySelectorAll(".small-image");

    smallImages.forEach(image => {
        image.addEventListener("click", () => {
            mainImage.src = image.src;
            mainImage.alt = image.alt;
            mainImageCaption.textContent = image.alt;
        });
    });
});