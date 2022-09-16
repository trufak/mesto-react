import PopupWithForm from './PopupWithForm';
import {useRef, useState, useEffect} from 'react';

function EditAvatarPopup (props) {

  const [textButton, setTextButton] = useState('Сохранить');

  useEffect (()=>{
    props.isOpen && setTextButton('Сохранить');
  },[props.isOpen]);

  const avatarRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextButton('Сохранение...');
    props.onUpdateAvatar(avatarRef.current.value);
    avatarRef.current.value = '';
  }

  return (
    <PopupWithForm
      name = "popup_edit-avatar"
      title = "Обновить аватар"
      isOpen = {props.isOpen}
      onClose = {props.onClose}
      onSubmit = {handleSubmit}>
      <ul className="popup__inputs">
        <li>
          <input
            className="popup__input popup__input_link-avatar"
            id="link-avatar"
            name = "link"
            type="url"
            placeholder="Ссылка на изображение"
            required
            ref={avatarRef}/>
          <span className="popup__input-error link-avatar-error"/>
        </li>
      </ul>
      <button
        type="submit"
        className="popup__submit-button popup__submit-button_edit">{textButton}
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
