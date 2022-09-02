import React from 'react';
import api from '../utils/api'

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  //Получение данных пользователя с сервера при монтировании
  React.useEffect(()=>{
    api.getUserInfo()
    .then(userInfo=>{
      setUserName (userInfo.name);
      setUserDescription (userInfo.about);
      setUserAvatar (userInfo.avatar);
    })
    .catch(err => {
      console.log(err);
    });
  },[]);

  //Загрузка карточек
  React.useEffect(()=>{
    api.getInitialCards()
    .then(initialCards=>{
      setCards(initialCards.map(card=>{
        return (
          <li className="elements__item">
          <article className="element">
            <img className="element__mask" src={card.link} alt={card.name} />
            <button type="button" className="element__delete" aria-label="Удалить место"></button>
            <div className = "element__like-container">
              <button type="button" className="element__like" aria-label="Поставить лайк"></button>
              <p className="element__like-count">{card.likes.length}</p>
            </div>
            <h2 className="element__caption">{card.name}</h2>
          </article>
        </li>
        );
      }));
    })
    .catch(err => {
      console.log(err);
    });
  },[]);

  return (
    <main>
      <section className="profile">
          <button className="profile__edit-avatar-button" onClick = {props.onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}>
          </button>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button type="button" className="profile__info-edit-button"
          aria-label="Корректировать профиль" onClick = {props.onEditProfile}></button>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавть место"
        onClick = {props.onAddPlace}></button>
      </section>
      <section>
        <ul className="elements">
          {cards}
        </ul>
      </section>
    </main>
  );
}

export default Main;
