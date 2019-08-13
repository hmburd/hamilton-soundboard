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
import soundfile10 from './assets/raise_a_glass_to_freedom.mp3'
import soundfile11 from './assets/i_am_the_one_thing_in_life_i_can_control.mp3'
import soundfile12 from './assets/love_doesnt_discrimate.mp3'
import soundfile13 from './assets/may_you_always_be_satisfied.mp3'
import soundfile14 from './assets/youll_be_back.mp3'
import soundfile15 from './assets/i_dont_have_a_dollar_to_my_name.mp3'
import soundfile16 from './assets/helpless.mp3'
import soundfile17 from './assets/yo_this_ones_mine.mp3'
import SoundButton from './SoundButton.js'


class SoundFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soundurls: [soundfile1, soundfile2, soundfile3, soundfile4, soundfile5, soundfile6, soundfile7, soundfile8, soundfile9, soundfile10, soundfile11, soundfile12, soundfile13, soundfile14, soundfile15, soundfile16, soundfile17],
      names: ['Aaron Burr', 'Alexander Hamilton', 'Angelica', 'I\'m getting nervous', 'My name is Alexander Hamilton', 'Talk Less', 'There\'s a million things I haven\'t done', 'Time', 'Smile more', 'Raise a glass to freedom', 'I am the one thing in life I can control', 'love doesn\'t discriminate', 'May you always be satisfied', 'You\'ll be back', 'I don\'t have a dollar to my name', 'Helpless', 'Yo this one\'s mine']
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

