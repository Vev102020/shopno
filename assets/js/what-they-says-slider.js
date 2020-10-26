let onPrevButtonClick = null;
let onNextButtonClick = null;

(function () {
  const images = [
    "photo_team1.png",
    "photo_team2.png",
    "photo_team3.png",
    "photo_team4.png",
    "photo_team5.png",
    "photo_team6.png",
  ];
  const peoples = [
    {
      name: "Lera Stone ",
      profession: "Designer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and you standard dummy know that text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 5,
    },
    {
      name: "Al Rayhan ",
      profession: "UX/UI designer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and you standard dummy know that text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 5,
    },
    {
      name: "Mike Smit ",
      profession: "Programmer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and you standard dummy know that text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 4,
    },
    {
      name: "Robert Hackey ",
      profession: "Content-manager",
      description:
        "Lorem Ipsum is simply dummy text of the printing and you standard dummy know that text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 5,
    },
    {
      name: "Miranda Ven ",
      profession: "Director",
      description:
        "Lorem Ipsum is simply dummy text of the printing and you standard dummy know that text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 4,
    },
    {
      name: "Lera Ston e",
      profession: "SMM-marketer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and you standard dummy know that text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 5,
    },
  ];

  const imageEl = document.getElementById("description_photo_team");
  const buttons = document.getElementById("what-they-says-slider-buttons")
    .children;
  const card = document.getElementById("what-they-says-card");
  const cardTitle = card.children[0].children[0];
  const cardProfession = card.children[0].children[2];
  const cardDescription = card.children[1];
  const cardRating = card.children[2].children;

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
   * Меняет карточку
   * @param {Object} user
   */
  function changeCard(user) {
    cardTitle.innerHTML = user.name;
    cardDescription.innerHTML = user.description;
    cardProfession.innerHTML = user.profession;

    // console.log("changeCard -> user.rating", user.rating);
    for (let i = 0; i < cardRating.length; i++) {
      if (i < user.rating) {
        cardRating[i].classList.remove("star-unactive-icon");
      } else {
        cardRating[i].classList.add("star-unactive-icon");
      }
    }
  }

  /**
   * Меняет картику и состояние кнопки
   * @param {Number} imageIndex Индекс картики
   */
  function changeSliderItem(imageIndex) {
    changeImage(images[imageIndex]);
    for (let index = 0; index < buttons.length; index++) {
      if (index == current) {
        setButtonFocus(index, true);
      } else {
        setButtonFocus(index, false);
      }
    }
  }

  let current = 0;

  function onPrev() {
    if (current === 0 || peoples.length < current) {
      return;
    }

    current--;
    changeSliderItem(current);
    changeCard(peoples[current]);
  }

  function onNext() {
    if (current === peoples.length - 1) {
      return;
    }

    current++;
    changeSliderItem(current);
    changeCard(peoples[current]);
  }

  onPrevButtonClick = onPrev;
  onNextButtonClick = onNext;

  changeSliderItem(current);
  changeCard(peoples[current]);
})();
