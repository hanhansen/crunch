import React from "react";
import Header from './Header'
import SearchPanel from './SearchPanel'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <SearchPanel />
    </div>
  );
};

export default Home;
