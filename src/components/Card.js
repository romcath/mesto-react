import React from 'react';

function Card() {
  return (
    <li className="card">
      <div className="card__image"></div>
      <button type="button" className="button card__delete-btn"></button>
      <div className="card__description">
        <h2 className="card__title">Карачаевск</h2>
        <div className="card__likes">
          <button type="button" className="button card__like-btn"></button>
          <p className="card__like-count">1</p>
        </div>

      </div>
    </li>
  )
}

export default Card;