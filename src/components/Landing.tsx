import React, { Component } from 'react'
import { Redirect } from 'react-router'
import CreatableSelect from 'react-select/creatable'
import SearchSection from './SearchSection'
import { Logo } from './shared/Logo'
import { Loader } from './shared/Loader'

import './Landing.scss'
import { searchRecipes } from '../utils/resolvers'

interface LandingProps {
  intl: any
}

interface LandingStates {
  loading: boolean
  redirect: boolean
  ingredients: { value: string; label: string }[]
  dietRestrictions: { value: string; label: string }[]
}

const local = defineMessages({
  ingredientPlaceholder: {
    id: 'ingredientPlaceholder',
    defaultMessage: 'Search by ingredient(s)'
  },
  dietaryRestrictions: {
    id: 'dietaryRestrictions',
    defaultMessage: 'Any dietary restrictions?'
  },
  search: {
    id: 'search',
    defaultMessage: 'Search'
  }
})

class Landing extends Component<LandingProps, LandingStates> {
  state: LandingStates = {
    loading: false,
    redirect: false,
    ingredients: [],
    dietRestrictions: []
  }

  handleSubmit = () => {
    const { ingredients, dietRestrictions } = this.state
    const inputData = {
      ingredients: ingredients.map(item => item.label),
      dietRestrictions: dietRestrictions.map(item => item.label)
    }

    this.setState(
      {
        loading: true
      },
      async () => {
        const data = await searchRecipes(inputData)
        this.setState({
          loading: false,
          redirect: true
        })
      }
    )
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
    return (
      <div className='landing'>
        {this.state.redirect && <Redirect to='/main' />}
        <div className='landing__main'>
          <Logo />
          <div className='landing__subtitle'>
            In a crunch? Find recipes based on the ingredients you already have.
          </div>
          <div className='landing__search'>
            <CreatableSelect
              className='landing__bar'
              isMulti={true}
              theme={theme => ({
                ...theme,
                borderRadius: 0
              })}
              options={[]}
              placeholder='Search by ingredient(s)'
              onChange={this.onIngredientChange}
            />
            <CreatableSelect
              className='landing__bar'
              isMulti={true}
              theme={theme => ({
                ...theme,
                borderRadius: 0
              })}
              options={[]}
              placeholder='Any dietary restrictions?'
              onChange={this.onDietChange}
            />
            <button
              className='landing__submit'
              title='search'
              onClick={this.handleSubmit}
            >
              {this.state.loading ? (
                <Loader />
              ) : (
                <img
                  className='landing__img'
                  src={require('../icons/search.png')}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
