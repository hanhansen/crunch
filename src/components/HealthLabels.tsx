import React, { Component } from 'react'

import './HealthLabels.scss'

interface HealthLabelsProps {
  labels: string[]
}

class HealthLabels extends Component<HealthLabelsProps> {
  
  getImage (label: string) {
    let image
    switch(label.toLowerCase()) {
      case 'vegan':
        image = <img src={require('../icons/vegan.png')} title={label} />
        break
      case 'vegetarian':
        image = <img src={require('../icons/vegetarian.png')} title={label} />
        break
      case 'dairy-free':
        image = <img src={require('../icons/dairy-free.png')} title={label} />
        break
      case 'gluten-free':
        image = <img src={require('../icons/gluten-free.png')} title={label} />
        break
      case 'wheat-free':
        image = <img src={require('../icons/gluten-free.png')} title={label} />
        break
      case 'egg-free':
        image = <img src={require('../icons/egg-free.png')} title={label} />
        break
      case 'peanut-free':
          image = <img src={require('../icons/peanut-free.png')} title={label} />
        break
      case 'tree-nut-free':
        image = <img src={require('../icons/peanut-free.png')} title={label} />
        break
      default:
        console.log(`${label} implementation needed`)
    }
    return image
  }

  render () {
    const { labels } = this.props
    if (!labels.length) {
      return null
    }
  
    return (
      <div className='healthLabels'>
        { labels.map((label: string) => this.getImage(label)) }
      </div>
    )
  }
}

export default HealthLabels