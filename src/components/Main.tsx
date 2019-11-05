import React from "react";
import Header from "./Header";
import SearchPanel from "./SearchPanel";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <Header />
      <SearchPanel />
    </div>
  );
};

export default Main;
