import React, { Component } from 'react'
import SoundFile from '../components/SoundFile.js'
import CommentPage from './CommentPage'
import image from '../components/assets/hamiltonphoto.jpg'

const divStyle = {
  width: '88%',
  height: '800px',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover'
};

class SoundBoardPage extends Component{
  render() {
    return (
      <>
      <div >
        <div style={divStyle} class="container">
          <h1 class="display-4">Hamilton Soundboard</h1>
          <p class="lead">Some fun Hamilton Musical Clips to enjoy with your friends!</p>
          <SoundFile/>
        </div>
      </div>
      <footer>
        <CommentPage />
      </footer>
      </>
    );
  }
}

export default SoundBoardPage;