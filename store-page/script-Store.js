const initSlider = (container) => {
    const imageList = container.querySelector(".image-list");
    const slideButtons = container.querySelectorAll(".slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  
    slideButtons.forEach(button => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = (imageList.clientWidth / 3) * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });
  
    const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }
  
    imageList.addEventListener("scroll", () => {
      handleSlideButtons();
    });
  }
  
  window.addEventListener("resize", () => {
    const sliders = document.querySelectorAll(".slider-wrapper");
    sliders.forEach(slider => {
      initSlider(slider);
    });
  });
  
  window.addEventListener("load", () => {
    const sliders = document.querySelectorAll(".slider-wrapper");
    sliders.forEach(slider => {
      initSlider(slider);
    });
  });

const openASbtn = document.getElementById("apple-specialist-btn");
const openPSbtn = document.getElementById("personal-session-btn");
const openGBbtn =document.getElementById("genius-bar-btn")

const overlay = document.getElementById("popup-overlay");

const popupAS = document.getElementById("popup-container-AS");
const popupPS = document.getElementById("popup-container-PS");
const popupGB = document.getElementById("popup-container-GB");

const closeBtnAS = document.getElementById("close-popup-btn-AS");
const closeBtnPS = document.getElementById("close-popup-btn-PS");
const closeBtnGB = document.getElementById("close-popup-btn-GB");


openASbtn.addEventListener("click", () => {
    overlay.style.display = "block";
    popupAS.style.display = "block";
});
openPSbtn.addEventListener("click", () => {
  overlay.style.display = "block";
  popupPS.style.display = "block";
});
openGBbtn.addEventListener("click", () => {
  overlay.style.display = "block";
  popupGB.style.display = "block";
});


closeBtnAS.addEventListener("click", () => {
    overlay.style.display = "none";
    popupAS.style.display = "none";
});
closeBtnPS.addEventListener("click", () => {
  overlay.style.display = "none";
  popupPS.style.display = "none";
});
closeBtnGB.addEventListener("click", () => {
  overlay.style.display = "none";
  popupGB.style.display = "none";
});