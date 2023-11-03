const imageContainer = document.getElementById("imageContainer");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let translateX = 0;
const step = 0.14;

prevButton.addEventListener("click", function () {
    if (translateX < 0) {
        translateX += step;
        updateImageContainer();
    }
});

nextButton.addEventListener("click", function () {
    const maxTranslateX = (imageContainer.children.length - 2) * -step;
    if (translateX > maxTranslateX) {
        translateX -= step;
        updateImageContainer();
    }
});

function updateImageContainer() {
    imageContainer.style.transform = `translateX(${translateX * 100}%)`;
}