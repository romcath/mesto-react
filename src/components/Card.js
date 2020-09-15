import React from 'react';

function Card(props) {
  const cardStyle = {backgroundImage: `url(${props.card.link})`};

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <div className="card__image" style={cardStyle} onClick={handleClick}></div>
      <button type="button" className="button card__delete-btn"></button>
      <div className="card__description">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__likes">
          <button type="button" className="button card__like-btn"></button>
          <p className="card__like-count">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;