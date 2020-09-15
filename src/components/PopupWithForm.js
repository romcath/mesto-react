import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && "popup_is-opened"}`}>
      <div className="popup__content">
        <form className="popup__form" name={props.name} noValidate>
          <button className="button popup__close-btn" type="button" onClick={props.onClose}></button>
          <h3 className="popup__title">{props.title}</h3>
          {props.children}
          <button className="button popup__button">{props.buttonText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;