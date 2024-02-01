// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки
function createCard(card, deleteCard) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImg = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImg.src = card.link;
  cardImg.alt = card.name;
  cardTitle.textContent = card.name;
  deleteButton.addEventListener("click", deleteCard);

  return cardElement;
}

// @todo: Функция удаления карточки

function deleteCard(event) {
  const deleteCard = event.target.closest(".card");
  deleteCard.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach((card) => {
  placesList.append(createCard(card, deleteCard));
});
