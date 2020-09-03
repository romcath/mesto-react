import React from 'react';

function PopupWithForm() {
  return (
    <div className="popup popop_type_edit">
      <div className="popup__content">
        <form className="popup__form" name="edit" noValidate>
          <button className="button popup__close-btn"></button>
          <h3 className="popup__title">Редактировать профиль</h3>

          <label className="popup__label">
            <input
              type="text"
              name="userName"
              id="owner-name"
              className="popup__input popup__input_type_name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              required />
            <span className="popup__error" id="owner-name-error"></span>
          </label>
          <label className="popup__label">
            <input
              type="text"
              name="userDescription"
              id="owner-description"
              className="popup__input popup__input_type_description"
              placeholder="Занятие"
              minLength="2"
              maxLength="200"
              required />
            <span className="popup__error" id="owner-description-error"></span>
          </label>

          <button className="button popup__button">Сохранить</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;