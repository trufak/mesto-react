import PopupWithForm from './PopupWithForm';

function EditProfilePopup (props) {

return (
  <PopupWithForm
  name = "popup_edit-profile"
  title = "Редактировать профиль"
  isOpen = {props.isOpen}
  onClose = {props.onClose}>
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
        required />
      <span className="popup__input-error desc-profile-error"/>
    </li>
  </ul>
    <button
      type="submit"
      className="popup__submit-button popup__submit-button_edit">Сохранить
    </button>
</PopupWithForm>
);
}

export default EditProfilePopup;
