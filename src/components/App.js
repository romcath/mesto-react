import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();


  function handleEditProfile() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlace() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatar() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }


  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(undefined);
  }

  return (
    <div className="root">
      <Header />
      <Main onEditProfile={handleEditProfile} onAddPlace={handleAddPlace} onEditAvatar={handleEditAvatar} onCardClick={handleCardClick} />
      <Footer />

      <PopupWithForm title="Редактировать профиль" name="edit" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="popup__label">
          <input
            type="text"
            name="user-name"
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
            name="user-description"
            id="owner-description"
            className="popup__input popup__input_type_description"
            placeholder="Занятие"
            minLength="2"
            maxLength="200"
            required />
          <span className="popup__error" id="owner-description-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm title="Новое место" name="place" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__label">
          <input
            type="text"
            name="place-name"
            id="place-name"
            className="popup__input popup__input_type_place-name"
            placeholder="Название"
            minLength="2"
            maxLength="40"
            required />
          <span className="popup__error" id="place-name-error"></span>
        </label>
        <label className="popup__label">
          <input
            type="url"
            name="placeLink"
            id="place-link"
            className="popup__input popup__input_type_place-link"
            placeholder="Ссылка на картинку"
            minLength="2"
            maxLength="200"
            required />
          <span className="popup__error" id="place-link-error"></span>
        </label>
      </PopupWithForm>

      <PopupWithForm title="Обновить аватар" name="avatar" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__label">
          <input
            type="url"
            name="avatar"
            id="avatar"
            className="popup__input popup__input_type_avatar"
            placeholder="Ссылка на аватар"
            minLength="2"
            maxLength="40"
            required />
          <span className="popup__error" id="avatar-error"></span>
        </label>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
