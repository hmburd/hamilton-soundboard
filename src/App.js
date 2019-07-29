import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import SoundButton from './pages/MusicPage.js'


class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={SoundButton} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App