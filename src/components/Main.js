import React from 'react';
import Card from './Card';

function Main() {
  return (
    <main className="content">
      <section className="profile root__profile">
        <img src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Аватарка" className="profile__image" />
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <button className="button profile__edit-btn"></button>
          <p className="profile__job">Исследователь океана</p>
        </div>
        <button className="button profile__add-btn"></button>
      </section>
      <section className="cards root__cards">
        <ul className="cards__list">
          <Card />
        </ul>
      </section>
    </main>
  )
}

export default Main;