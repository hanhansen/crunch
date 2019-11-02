import React from 'react'
import { IntlProvider } from 'react-intl';
import './App.scss'
import Home from './components/Home.tsx'

function App () {
  return (
    <IntlProvider locale="en">
      <div className='App'>
        <Home />
      </div>
    </IntlProvider>
  )
}

export default App
