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
  