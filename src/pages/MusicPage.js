import React, { Component } from 'react'
import SoundFile from '../components/SoundFile.js'
import photo from '/Users/Admin/Desktop/CodePlatoon/practicereactforproject/practice-audio/src/components/assets/hamiltonphoto.jpg'


class SoundBoardPage extends Component{
  render() {
    return (
      <>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
      <img src={photo}/>
      <h1 class="display-4">Hamilton Musical Soundboard</h1>
      <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      </div>
      </div>
      <SoundFile />
      </>
    );
  }
}

export default SoundBoardPage;