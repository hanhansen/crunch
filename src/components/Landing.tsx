import React from 'react'
import { FormattedMessage, defineMessages, useIntl } from 'react-intl'
import CreatableSelect from 'react-select/creatable'
import SearchSection from './SearchSection'
import { Logo } from './shared/Logo'

import './Landing.scss'

const local = defineMessages({
  ingredientPlaceholder: {
    id: 'ingredientPlaceholder',
    defaultMessage: 'Search by ingredient(s)'
  },
  dietaryRestrictions: {
    id: 'dietaryRestrictions',
    defaultMessage: 'Any dietary restrictions?'
  }
})

const Landing = () => {
  const intl = useIntl()
  return (
    <div className='landing'>
      <div className="landing__main">
        <Logo />
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
          />
          <button className='landing__submit'>
            <img className='landing__img' src={require('../icons/search.png')} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing