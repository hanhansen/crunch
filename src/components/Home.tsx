import React from "react";
import { FormattedMessage } from "react-intl";
import './Home.scss'
const Home = () => {
  return (
    <div className='home'>
      <div>
        <img className='home__logo' src={require("../logo.png")} alt="logo" />
        <FormattedMessage id="app-title" defaultMessage="Crunch." />
      </div>
    </div>
  );
};

export default Home;
