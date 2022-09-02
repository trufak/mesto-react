import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isCardPopupOpen, setIsCardPopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsCardPopupOpen(true);
  };

  const closeAllPopups = (e) => {
    if (e.target.classList.contains('popup') || e.target.classList.contains('close-button'))
    {
      isEditAvatarPopupOpen && setIsEditAvatarPopupOpen(false);
      isEditProfilePopupOpen && setIsEditProfilePopupOpen(false);
      isAddPlacePopupOpen && setIsAddPlacePopupOpen(false);
      isCardPopupOpen && setIsCardPopupOpen(false);
      setSelectedCard({});
    }
  };

  return (
    <div className="App">
      <div className="main-page">
        <Header />
        <Main
          onEditAvatar = {handleEditAvatarClick}
          onEditProfile = {handleEditProfileClick}
          onAddPlace = {handleAddPlaceClick}
          onCardClick = {handleCardClick}/>
        <Footer />
      </div>
      <ImagePopup
        card = {selectedCard}
        onClose = {closeAllPopups}
        isOpen = {isCardPopupOpen}/>
      <PopupWithForm
        name = "popup_edit-profile"
        title = "Редактировать профиль"
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}>
        <ul className="popup__inputs">
          <li>
            <input
              className="popup__input popup__input_name-profile"
              id="name-profile"
              name = "name"
              type="text"
              minLength = "2"
              maxLength = "40"
              placeholder="Имя профиля"
              required />
            <span className="popup__input-error name-profile-error"></span>
          </li>
          <li>
            <input
              className="popup__input popup__input_desc-profile"
              id="desc-profile"
              name = "description"
              type="text"
              minLength = "2"
              maxLength = "200"
              placeholder="О себе"
              required />
            <span className="popup__input-error desc-profile-error"></span>
          </li>
        </ul>
          <button
            type="submit"
            className="popup__submit-button popup__submit-button_edit">
            Сохранить
          </button>
      </PopupWithForm>
      <PopupWithForm
        name = "popup_edit-avatar"
        title = "Обновить аватар"
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}>
        <ul className="popup__inputs">
          <li>
            <input
              className="popup__input popup__input_link-avatar"
              id="link-avatar"
              name = "link"
              type="url"
              placeholder="Ссылка на изображение"
              required />
            <span className="popup__input-error link-avatar-error"></span>
          </li>
        </ul>
        <button
          type="submit"
          className="popup__submit-button popup__submit-button_edit">
            Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm
        name = "popup_add-card"
        title = "Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose = {closeAllPopups}>
        <ul className="popup__inputs">
          <li>
            <input
              className="popup__input popup__input_name-card"
              id="name-card"
              name = "name" type="text"
              placeholder="Название"
              minLength = "2"
              maxLength = "30"
              required />
            <span className="popup__input-error name-card-error"></span>
          </li>
          <li>
            <input
              className="popup__input popup__input_link-card"
              id="link-card"
              name = "link"
              type="url"
              placeholder="Ссылка на картинку"
              required />
            <span className="popup__input-error link-card-error"></span>
          </li>
        </ul>
        <button
          type="submit"
          className="popup__submit-button popup__submit-button_add">
            Создать
          </button>
      </PopupWithForm>
      <PopupWithForm
        name = "popup_delete-card"
        title = "Вы уверены?">
        <button
          type="submit"
          className="popup__submit-button popup__submit-button_delete">
            Да
        </button>
      </PopupWithForm>
    </div>
  );
}

export default App;
