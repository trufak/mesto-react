import PopupWithForm from "./PopupWithForm";

function PopupWithConfirmation (props) {
  return (
    <PopupWithForm
      name = {props.name}
      title = {props.title}
      isOpen = {props.isOpen}
      onClose = {props.onClose}
      onSubmit = {props.onSubmit} >
      <button
        type="submit"
        className={`popup__submit-button ${props.buttonClassName}`}>{props.buttonText}
      </button>
    </PopupWithForm>
  )
}

export default PopupWithConfirmation;
