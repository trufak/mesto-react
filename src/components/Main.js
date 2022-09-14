import React from 'react';
import api from '../utils/api';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {
  //States
  const [cards, setCards] = React.useState([]);


  //Hookes
  //Подписка на контекст с данными пользователя
  const currentUser = React.useContext(CurrentUserContext);
  //Загрузка карточек
  React.useEffect(()=>{
    api.getInitialCards()
    .then(initialCards=>{
      setCards(initialCards)})
    .catch(err => {
      console.log(err);
    });
  },[]);

  //Methods
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }
  function handleCardDelete(card) {
    api.deleteCard(card._id)
    .then(()=>{
      setCards(state=>state.map((c,i,arr)=>c._id === card._id && arr.splice(i,i)))
    })
  }

  return (
    <main>
      <section className="profile">
          <button
            className="profile__edit-avatar-button"
            onClick = {props.onEditAvatar}
            style={{ backgroundImage: `url(${currentUser.avatar})` }} />
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button
            type="button"
            className="profile__info-edit-button"
            aria-label="Корректировать профиль"
            onClick = {props.onEditProfile}/>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="Добавть место"
          onClick = {props.onAddPlace}/>
      </section>
      <section>
        <ul className="elements">
          {cards.map(card=>{
            return (
              <Card key={card._id}
                card={card}
                onCardClick={props.onCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}/>)
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
