import React from 'react';
import logoPath from '../images/logo.svg';

function Header() {
  return (
    <header className="header root__header">
      <img src={logoPath} alt="Логотип проекта Место" className="logo" />
    </header>
  )
}

export default Header;