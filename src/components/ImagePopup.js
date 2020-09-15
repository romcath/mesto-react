import React from 'react';

function ImagePopup(props) {
  return(
    <div className={`popup popup_type_image ${props.card && "popup_is-opened"}`}>
      <div className="popup__content popup__content_content_image">
        <button className="button popup__close-btn" type="button" onClick={props.onClose}></button>
        <img src={props.card ? props.card.link : ''} alt={props.card ? props.card.name : ''} className="popup__image" />
        <p className="popup__caption">{props.card ? props.card.name : ''}</p>
      </div>
    </div>
  )
}

export default ImagePopup;