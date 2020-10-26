const teamContainer = document.getElementById("small_team__photo_container");
// console.log(teamContainer);

const infoCard = document.getElementsByClassName("photo__block");
console.log(infoCard);

console.log(infoCard[0]);

/**
 * Меняет состояние фокуса у i-ой кнопки
 * @param {Number} index Индекс карточки
 * @param {Boolean} state true - focus / false - выкл
 */
function setCardFocus(index, state) {
  if (!infoCard[index]) {
    return;
  }

  if (state) {
    infoCard[index].classList.add("photo__info__inactive");
  } else {
    infoCard[index].classList.remove("photo__info__inactive");
  }
}

setCardFocus(2, true);
