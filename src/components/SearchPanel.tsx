import React, { Component } from 'react'
import CreatableSelect from 'react-select/creatable'
import classnames from 'classnames'
import './SearchPanel.scss'
import { autocomplete, searchRecipes } from '../utils/resolvers'
import { Loader } from './shared/Loader'

interface SearchPanelProps {
  onRequestSubmit: (value: boolean, data: any) => void
}

interface SearchPanelStates {
  loading: boolean
  redirect: boolean
  disabled: boolean
  ingredients: { value: string; label: string }[]
  dietRestrictions: { value: string; label: string }[]
  ingredientOptions: { value: string; label: string }[]
  healthLabelOptions: { value: string; label: string }[]
}

class SearchPanel extends Component<SearchPanelProps, SearchPanelStates> {
  state: SearchPanelStates = {
    loading: false,
    redirect: false,
    disabled: true,
    ingredients: [],
    dietRestrictions: [],
    ingredientOptions: [],
    healthLabelOptions: []
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
        })
        this.props.onRequestSubmit(true, data)
      }
    )
  }

  handleIngredientKeyDown = async(event: any) => {
    const element = event.target as HTMLInputElement
    const results = await autocomplete(element.value)
    this.setState({
      ingredientOptions: results && results.map((value: string) => ({
        value,
        label: value
      }))
    })
  }

  handleHealthLabelKeyDown = async(event: any) => {
    const element = event.target as HTMLInputElement
    const results = await autocomplete(element.value)
    this.setState({
      healthLabelOptions: results && results.map((value: string) => ({
        value,
        label: value
      }))
    })
  }

  onIngredientChange = (newValue: any) => {
    this.setState({
      ingredients: newValue,
      disabled: !newValue
    })
  }

  onDietChange = (newValue: any) => {
    this.setState({
      dietRestrictions: newValue,
      disabled: !newValue
    })
  }
  render() {
    const { ingredientOptions, healthLabelOptions } = this.state
    const buttonKlass = classnames({
      'searchPanel__submit': true,
      disabled: this.state.disabled
    })
    return (
      <div className='searchPanel'>
        <CreatableSelect
          className='searchPanel__bar'
          isMulti={true}
          theme={theme => ({
            ...theme,
            borderRadius: 0
          })}
          isClearable={false}
          options={ingredientOptions}
          placeholder='Search by ingredient(s)'
          onChange={this.onIngredientChange}
          onKeyDown={this.handleIngredientKeyDown}
        />
        <CreatableSelect
          className='searchPanel__bar'
          isMulti={true}
          theme={theme => ({
            ...theme,
            borderRadius: 0
          })}
          isClearable={false}
          options={healthLabelOptions}
          placeholder='Any dietary restrictions?'
          onChange={this.onDietChange}
          onKeyDown={this.handleHealthLabelKeyDown}
        />
        <button
          className={buttonKlass}
          title='search'
          onClick={this.handleSubmit}
          disabled={this.state.disabled}
        >
          {this.state.loading ? (
            <Loader />
          ) : (
            <img
              className='searchPanel__img'
              src={require('../icons/search.png')}
              alt='search'
            />
          )}
        </button>
      </div>
    )
  }
}

export default SearchPanel
