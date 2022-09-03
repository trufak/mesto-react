function ImagePopup (props) {
  return (
    <div className={`popup popup_card ${props.isOpen && 'popup_opened'}`}
    onClick={props.onClose}>
    <div className="popup__card-container">
      <button
        type="button"
        className="close-button close-button_popup"
        aria-label="Закрыть"/>
      <img
        className="popup__mask"
        src={props.card.link}
        alt={props.card.name}/>
      <h2 className="popup__caption">{props.card.name}</h2>
    </div>
  </div>
  );
}

export default ImagePopup;
