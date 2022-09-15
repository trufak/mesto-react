function PopupWithForm (props) {
  return (
    <div
      className= {`popup ${props.name} ${props.isOpen && 'popup_opened'}`}
      onClick={props.onClose}>
      <div className="popup__container">
        <button
          type="button"
          className="close-button close-button_popup"
          aria-label="Закрыть"/>
        <h3 className="popup__title">{props.title}</h3>
        <form
          name={props.name}
          className="popup__form"
          noValidate
          onSubmit={props.onSubmit}
          >{props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
