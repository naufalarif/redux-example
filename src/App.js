import React, { Component } from 'react';
import Logo from './assets/logo.png';
import './assets/App.css';
import { connect } from 'react-redux';
import * as ACTION from './redux/action/counterAction'

class App extends Component {
  render() {
    const { incrementCounter, decrementCounter, counterState } = this.props
    return (
      <div className="App">
        <div>
          <img 
            src={Logo}
            alt=''
            width='15%'
          />
          <h1>Counter with redux</h1>
        </div>
        <div>
          <button className='btn' onClick={() => decrementCounter()}>-</button>
          <span className='text'>{counterState.counter}</span>
          <button className='btn' onClick={() => incrementCounter()}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counterState: state.counterState
})

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(ACTION.incrementCounter()),
  decrementCounter: () => dispatch(ACTION.decrementCounter())
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
