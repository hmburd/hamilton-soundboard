import React, { Component } from 'react'
import soundfile1 from './assets/aaron_burr.mp3'
import soundfile2 from './assets/alexander_hamilton.mp3'
import soundfile3 from './assets/angelica.mp3'
import soundfile4 from './assets/im_getting_nervous.mp3'
import soundfile5 from './assets/my_name_is_alexander_hamilton.mp3'
import soundfile6 from './assets/talk_less.mp3'
import soundfile7 from './assets/theres_a_million_things_i_havent_done.mp3'
import soundfile8 from './assets/time.mp3'
import soundfile9 from './assets/smile_more.mp3'
import SoundButton from './SoundButton.js'


class SoundFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soundurls: [soundfile1, soundfile2, soundfile3, soundfile4, soundfile5, soundfile6, soundfile7, soundfile8, soundfile9],
      names: ['Aaron Burr', 'Alexander Hamilton', 'Angelica', 'I\'m getting nervous', 'My name is Alexander Hamilton', 'Talk Less', 'There\'s a million things I haven\'t done', 'Time', 'Smile more']
  }
}
  getSoundFiles = () => {
    let buttons = []
    for (let i = 0; i<this.state.soundurls.length; i++){
      this.soundfile = this.state.soundurls[i]
      buttons.push(<SoundButton soundfile={this.soundfile} names={this.state.names[i]}/>)
    }
    return buttons
  }

render() {
  return (
    <div>
      {this.getSoundFiles()}
    </div>
    );
}
}

export default SoundFile

