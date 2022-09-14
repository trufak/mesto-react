import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card (props) {
  //Hookes
  //Подписка на контекст с данными пользователя
  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, является ли текущий пользователь владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName =
  `element__delete ${isOwn ? 'element__delete_visible' : 'card__delete_hidden'}`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${isLiked && 'element__like_active'}`;

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }


  return (
    <li className="elements__item">
      <article className="element">
        <img
          className="element__mask"
          src={props.card.link}
          alt={props.card.name}
          onClick = {handleClick}/>
        <button type="button"
          className={cardDeleteButtonClassName}
          aria-label="Удалить место"
          onClick={handleDeleteClick}/>
        <div className = "element__like-container">
          <button type="button"
            className={cardLikeButtonClassName}
            aria-label="Поставить лайк"
            onClick={handleClick}/>
          <p className="element__like-count">{props.card.likes.length}</p>
        </div>
        <h2 className="element__caption">{props.card.name}</h2>
      </article>
    </li>
  );
}

export default Card;
