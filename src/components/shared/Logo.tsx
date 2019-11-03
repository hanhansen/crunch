import React from "react";
import { FormattedMessage } from 'react-intl'
import './Logo.scss'
export function Logo () {
  return (
    <div className='logo'>
      <img className="logo__img" src={require("../../icons/logo.png")} alt="logo" />
      <FormattedMessage id="logo_title" defaultMessage="Crunch." />
    </div>
  );
}
