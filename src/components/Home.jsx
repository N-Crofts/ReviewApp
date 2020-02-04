import React, { Component } from 'react'


export default class Home extends Component {
  render() {
    return (
      <div className='homeHeader'>
        <img src={require('../Synth01.jpg')} />
        <div>
          Instant Synthwave
        </div>
        <div>
          by Nick
        </div>
        <div>
          Turn any everyday situation into a proper Synthwave Rave with the Instant Synthwave device!
        </div>
        <ul>
          Lorem ipsum and yadda yadda yadda
        </ul>
      </div>
    )
  }
}
