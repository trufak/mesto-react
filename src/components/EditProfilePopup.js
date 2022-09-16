import PopupWithForm from './PopupWithForm';
import { useState, useContext, useEffect } from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function EditProfilePopup (props) {

//States
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [textButton, setTextButton] = useState('Сохранить');

const currentUser = useContext(CurrentUserContext);

useEffect (()=>{
  setName(currentUser.name);
  setDescription(currentUser.about);
},[currentUser]);

useEffect (()=>{
  props.isOpen && setTextButton('Сохранить');
},[props.isOpen]);

const handleChangeName = (e) => {
  setName(e.target.value);
};

const handleChangeDescription = (e) => {
  setDescription(e.target.value);
};

const handleSubmit = (e) => {
  e.preventDefault();
  setTextButton('Сохранение...');
  props.onUpdateUser({
    name: name,
    about: description,
  });
}


return (
  <PopupWithForm
  name = "popup_edit-profile"
  title = "Редактировать профиль"
  isOpen = {props.isOpen}
  onClose = {props.onClose}
  onSubmit={handleSubmit}>
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
        required
        value={name}
        onChange={handleChangeName}/>
      <span className="popup__input-error name-profile-error"/>
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
        required
        value={description}
        onChange={handleChangeDescription}/>
      <span className="popup__input-error desc-profile-error"/>
    </li>
  </ul>
    <button
      type="submit"
      className="popup__submit-button popup__submit-button_edit">{textButton}
    </button>
</PopupWithForm>
);
}

export default EditProfilePopup;
