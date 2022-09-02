function Card (props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="elements__item">
      <article className="element">
        <img className="element__mask" src={props.card.link} alt={props.card.name}
        onClick = {handleClick}/>
        <button type="button" className="element__delete" aria-label="Удалить место"></button>
        <div className = "element__like-container">
          <button type="button" className="element__like" aria-label="Поставить лайк"></button>
          <p className="element__like-count">{props.card.likes.length}</p>
        </div>
        <h2 className="element__caption">{props.card.name}</h2>
      </article>
    </li>
  );
}

export default Card;
