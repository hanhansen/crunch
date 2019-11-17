import React, { Component } from 'react'
import CreatableSelect from 'react-select/creatable'
import './SearchSection.scss'

interface SearchSectionPanelState {
  options: { label: string; value: any }[]
}

class SearchSection extends Component<
  {},
  SearchSectionPanelState
> {
  state = {
    options: []
  }
  render() {
    return (
      <div className='searchSection'>
        <div>
          <CreatableSelect
            className='searchSection__bar'
            isMulti={true}
            isClearable={false}
            onChange={(newValue: any) => this.setState(newValue)}
            options={[]}
          />
        </div>
      </div>
    )
  }
}

export default SearchSection
