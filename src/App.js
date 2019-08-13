import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import SoundBoardPage from './pages/MusicPage.js'


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={SoundBoardPage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App