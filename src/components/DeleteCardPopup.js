import PopupWithConfirmation from "./PopupWithConfirmation";
import {useEffect, useState} from "react";

function DeleteCardPopup (props) {

  const [textButton, setTextButton] = useState('Да');

  useEffect (()=>{
    props.isOpen && setTextButton('Да');
  },[props.isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTextButton('Удаление...');
    props.onSubmit();
  };

  return (
    <PopupWithConfirmation
    name = "popup_delete-card"
    title = "Вы уверены?"
    isOpen = {props.isOpen}
    onClose = {props.onClose}
    onSubmit={handleSubmit}
    buttonClassName = 'popup__submit-button_delete'
    buttonText={textButton} />
  )
}

export default DeleteCardPopup;
