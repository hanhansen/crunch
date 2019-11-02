import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import Select from 'react-select'
import './SearchSection.scss'

interface SearchSectionProps {
  label: string
}
const SearchSection: FC<SearchSectionProps> = ({ label }) => {
  return (
    <div className="searchSection">
        <div>
          <div className='searchSection__label'>{label}</div>
          <Select
            className="searchSection__bar"
            isMulti={true}
            options={[{value:'orange', label: 'orange'}]}/>
        </div>
      </div>
  )
}

export default SearchSection