import React from "react";
import { FormattedMessage } from 'react-intl';
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className='header__left'></div>
      <div className='header__middle'>
        <img className="header__logo" src={require("../logo.png")} alt="logo" />
        <FormattedMessage id="header_title" defaultMessage="Crunch." />
      </div>
    </header>
  );
};

export default Header;
