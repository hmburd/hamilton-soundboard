import React, { Component } from 'react'
import SoundFile from '../components/SoundFile.js'
import CommentPage from './CommentPage'
// import photo from './components/assets/hamiltonphoto.jpg'


class SoundBoardPage extends Component{
  render() {
    return (
      <>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
      {/* <img src={photo}/> */}
      <h1 class="display-4">Hamilton Musical Soundboard</h1>
      <p class="lead">Some fun Hamilton Musical Clips to enjoy with your friends!</p>
      </div>
      </div>
      <SoundFile />
      <footer>
        <CommentPage />
      </footer>
      </>
    );
  }
}

export default SoundBoardPage;