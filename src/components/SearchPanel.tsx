import React from "react";
import "./SearchPanel.scss";
import { defineMessages, useIntl } from "react-intl";
import SearchSection from "./SearchSection";

const local = defineMessages({
  ingredients: {
    id: 'ingredients',
    defaultMessage: 'ingredients'
  },
  specialties: {
    id: 'specialties',
    defaultMessage: 'specialties'
  }
})

const SearchPanel = () => {
  const intl = useIntl()
  return (
    <div className="searchPanel">
      <SearchSection label={intl.formatMessage(local.ingredients)} />
      <SearchSection label={intl.formatMessage(local.specialties)} />
    </div>
  );
};

export default SearchPanel;
