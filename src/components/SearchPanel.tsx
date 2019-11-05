import React from "react";
import "./SearchPanel.scss";
import SearchSection from "./SearchSection";

const SearchPanel = () => {
  return (
    <div className="searchPanel">
      <SearchSection label="ingredients" />
      <SearchSection label="specialties" />
    </div>
  );
};

export default SearchPanel;
