import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
  //States
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [isCardPopupOpen, setIsCardPopupOpen] = React.useState(false);
  //Данные текщего пользователя
  const [currentUser, setCurrentUser] = React.useState({});

  //Hookes
  //Действия при монитровании
  React.useEffect(()=>{
    //Получение данных пользователя
    api.getUserInfo()
    .then(userInfo=>setCurrentUser(userInfo))
    .catch(err=>console.log(err));
  },[]);

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

  const handleUpdateUser = (userData) => {
    api.patchUserInfo(userData.name, userData.about)
    .then(userInfo => {
      setCurrentUser(userInfo);
      closeAllPopups();
    })
    .catch(err=>console.log(err));
  };

  const closeAllPopups = (e) => {
    if ((e && (e.target.classList.contains('popup') || e.target.classList.contains('close-button')))
    || !e)
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
      <CurrentUserContext.Provider value={currentUser}>
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
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser} />
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
              <span className="popup__input-error link-avatar-error"/>
            </li>
          </ul>
          <button
            type="submit"
            className="popup__submit-button popup__submit-button_edit">Сохранить
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
              <span className="popup__input-error name-card-error"/>
            </li>
            <li>
              <input
                className="popup__input popup__input_link-card"
                id="link-card"
                name = "link"
                type="url"
                placeholder="Ссылка на картинку"
                required />
              <span className="popup__input-error link-card-error"/>
            </li>
          </ul>
          <button
            type="submit"
            className="popup__submit-button popup__submit-button_add">Создать
          </button>
        </PopupWithForm>
        <PopupWithForm
          name = "popup_delete-card"
          title = "Вы уверены?">
          <button
            type="submit"
            className="popup__submit-button popup__submit-button_delete">Да
          </button>
        </PopupWithForm>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
