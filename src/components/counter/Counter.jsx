import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    return (
      <div className='container'>
        <div className='counter-container'>
            <div className='counter-text'>
                <h1 className='counter-text__title'>counter</h1>
                <h4  className='counter-text__desc'>0</h4>
            </div>
            <div className='counter-btns'>
                <div className='counter-btns__btn-increase'><button className='btn'>Increase</button></div>
                <div className='counter-btns__btn-decrease'><button className='btn'>decrease</button></div>
            </div>
        </div>
      </div>
    )
  }
}
