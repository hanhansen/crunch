import React, { Component } from "react";
import {
  FormattedMessage,
  defineMessages,
  injectIntl
} from "react-intl";
import CreatableSelect from "react-select/creatable";
import SearchSection from "./SearchSection";
import { Logo } from "./shared/Logo";

import "./Landing.scss";
import { searchRecipes } from "../utils/search";
import { string } from "prop-types";

interface LandingProps {
  intl: any
}

interface LandingStates {
  loading: boolean
  redirect: boolean
  ingredients: { value: string, label: string }[]
  dietRestrictions: { value: string, label: string }[]
}

const local = defineMessages({
  ingredientPlaceholder: {
    id: "ingredientPlaceholder",
    defaultMessage: "Search by ingredient(s)"
  },
  dietaryRestrictions: {
    id: "dietaryRestrictions",
    defaultMessage: "Any dietary restrictions?"
  },
  search: {
    id: 'search',
    defaultMessage: 'Search'
  }
});

class Landing extends Component<LandingProps, LandingStates> {
  state = {
    loading: false,
    redirect: false,
    ingredients: [],
    dietRestrictions: []
  }

  handleSubmit = () => {
    const { ingredients, dietRestrictions } = this.state
    const inputData = {
      ingredients,
      dietRestrictions
    }

    this.setState({
      loading: true
    }, async () => {
      const data = await searchRecipes(inputData)
      this.setState({
        loading: false,
        redirect: true
      })
    })
  }

  onIngredientChange = (newValue: any) => {
    this.setState({
      ingredients: newValue
    })
  }

  onDietChange = (newValue: any) => {
    this.setState({
      dietRestrictions: newValue
    })
  }

  render() {
    const { intl } = this.props
    return (
      <div className="landing">
        <div className="landing__main">
          <Logo />
          <div className="landing__subtitle">
            <FormattedMessage
              id="landing-subtitle"
              defaultMessage="In a crunch? Find recipes based on the ingredients you already have."
            />
          </div>
          <div className="landing__search">
            <CreatableSelect
              className="landing__bar"
              isMulti={true}
              theme={theme => ({
                ...theme,
                borderRadius: 0
              })}
              options={[{ value: "orange", label: "orange" }]}
              placeholder={intl.formatMessage(local.ingredientPlaceholder)}
              onChange={this.onIngredientChange}
            />
            <CreatableSelect
              className="landing__bar"
              isMulti={true}
              theme={theme => ({
                ...theme,
                borderRadius: 0
              })}
              options={[{ value: "orange", label: "orange" }]}
              placeholder={intl.formatMessage(local.dietaryRestrictions)}
              onChange={this.onDietChange}
            />
            <button
              className="landing__submit"
              title={intl.formatMessage(local.search)}
              onClick={this.handleSubmit}
            >
              <img
                className="landing__img"
                src={require("../icons/search.png")}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default injectIntl(Landing);
