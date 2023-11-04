const imageContainer = document.getElementById("imageContainer");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let translateX = 0;
const step = 0.14;

var click = 0;

prevButton.addEventListener("click", function () {
    if (translateX < 0) {
        translateX += step;

        click --;
        updateImageContainer();
    }
});

nextButton.addEventListener("click", function () {
    const maxTranslateX = (imageContainer.children.length - 2) * -step;
    if (translateX > maxTranslateX) {
        translateX -= step;

        click ++;
        updateImageContainer();
    }
});

function updateImageContainer() {
    imageContainer.style.transform = `translateX(${translateX * 100}%)`;
    if (click == 0) {
        prevButton.disabled = true;
    }else{
        prevButton.disabled = false;
    }

    if (click == 3) {
        nextButton.disabled = true;
    }else{
        nextButton.disabled = false;
    }

}