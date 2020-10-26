(function () {
  const images = [
    "img_about_us1.png",
    "img_about_us2.png",
    "img_about_us3.png",
    "img_about_us4.png",
  ];

  const imageEl = document.getElementById("img_about_us");
  const buttons = document.getElementById("about_us_slider_buttons").children;

  /**
   * Меняет картинку в слайдере
   * @param {String} image Название картики
   */
  function changeImage(image) {
    imageEl.src = `assets/img/${image}`;
  }

  /**
   * Меняет состояние фокуса у i-ой кнопки
   * @param {Number} index Индекс кнопки
   * @param {Boolean} state true - focus / false - blur
   */
  function setButtonFocus(index, state) {
    if (!buttons[index]) {
      return;
    }

    if (state) {
      buttons[index].classList.add("progress_button__active");
    } else {
      buttons[index].classList.remove("progress_button__active");
    }
  }

  /**
   * Меняет картику и состояние кнопки
   * @param {Number} imageIndex Индекс картики
   */
  function changeSliderItem(imageIndex) {
    changeImage(images[current]);
    for (let index = 0; index < buttons.length; index++) {
      if (index == current) {
        setButtonFocus(index, true);
      } else {
        setButtonFocus(index, false);
      }
    }
  }

  let current = 0;
  changeSliderItem(current);
  current++;
  setInterval(() => {
    changeSliderItem(current);
    if (current == images.length - 1) {
      current = 0;
    } else {
      current++;
    }
  }, 3 * 1000);
})();
