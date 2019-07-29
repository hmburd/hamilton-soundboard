import React, { Component } from 'react'

class SoundButton extends Component {
  constructor(props) {
  super(props);
  this.state = {
    play: false,
  }

  this.url = this.props.soundfile
  this.audio = new Audio(this.url);
  }

  play = () => {
  this.setState({
    play: true
   })
    this.audio.play();
  }

  render() {
    return (
      <div>
        <button onClick={this.play}>{this.props.names}</button>
      </div>
      );
  }
  }

export default SoundButton