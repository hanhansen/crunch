import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl';
import './App.scss'
import Main from './components/Main'
import Landing from './components/Landing'

function App () {
  return (
    <IntlProvider locale="en">
      <div className='App'>
        <Router>
          <Route exact={true} path='/' component={Landing} />
          <Route path='/main' component={Main} />
        </Router>
      </div>
    </IntlProvider>
  )
}

export default App
