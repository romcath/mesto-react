import React from 'react';
import Card from './Card';
import api from '../utils/api';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getAboutProfile().then((userData) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    });

    api.getInitialCards().then((cardData) => {
      setCards(cardData);
    });
  }, []);

  const imageStyle = { backgroundImage: `url(${userAvatar})` };



  return (
    <main className="content">
      <section className="profile root__profile">
        <div className="profile__image" onClick={props.onEditAvatar} style={imageStyle}/>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button className="button profile__edit-btn" type="button" onClick={props.onEditProfile}></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button className="button profile__add-btn" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards root__cards">
        <ul className="cards__list">
          {cards.map((card, i) => <Card key={i} card={card} onCardClick={props.onCardClick} />)}
        </ul>
      </section>
    </main>
  )
}

export default Main;