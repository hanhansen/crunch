import React, { Component } from 'react'
import CreatableSelect from 'react-select/creatable'
import './SearchSection.scss'

interface SearchSectionProps {
  label: string
}

interface SearchSectionPanelState {
  options: { label: string; value: any }[]
}

class SearchSection extends Component<
  SearchSectionProps,
  SearchSectionPanelState
> {
  state = {
    options: []
  }
  render() {
    const { label } = this.props
    return (
      <div className='searchSection'>
        <div>
          <div className='searchSection__label'>{label}</div>
          <CreatableSelect
            className='searchSection__bar'
            isMulti={true}
            onChange={(newValue: any) => this.setState(newValue)}
            options={[{ value: 'orange', label: 'orange' }]}
          />
        </div>
      </div>
    )
  }
}

export default SearchSection
