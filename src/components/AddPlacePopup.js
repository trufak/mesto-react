import PopupWithForm from './PopupWithForm';
import {useState, useEffect} from 'react';

function AddPlacePopup (props) {

  const [nameCard, setNameCard] = useState('');
  const [linkCard, setLinkCard] = useState('');
  const [textButton, setTextButton] = useState('Создать');

  useEffect (()=>{
    props.isOpen && setTextButton('Создать');
    setNameCard('');
    setLinkCard('');
  },[props.isOpen]);

  const handleChangeNameCard = (e) => {
    setNameCard(e.target.value);
  }

  const handleChangeLinkCard = (e) => {
    setLinkCard(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextButton('Создание...');
    props.onAddPlace(nameCard, linkCard);
  }

  return (
    <PopupWithForm
      name = "popup_add-card"
      title = "Новое место"
      isOpen={props.isOpen}
      onClose = {props.onClose}
      onSubmit={handleSubmit}>
      <ul className="popup__inputs">
        <li>
          <input
            className="popup__input popup__input_name-card"
            id="name-card"
            name = "name" type="text"
            placeholder="Название"
            minLength = "2"
            maxLength = "30"
            required
            value={nameCard}
            onChange={handleChangeNameCard} />
          <span className="popup__input-error name-card-error"/>
        </li>
        <li>
          <input
            className="popup__input popup__input_link-card"
            id="link-card"
            name = "link"
            type="url"
            placeholder="Ссылка на картинку"
            required
            value={linkCard}
            onChange={handleChangeLinkCard} />
          <span className="popup__input-error link-card-error"/>
        </li>
      </ul>
      <button
        type="submit"
        className="popup__submit-button popup__submit-button_add">{textButton}
      </button>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
