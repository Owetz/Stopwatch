import React from 'react';
import './StopWatch.css';
import Controller from './components/Controller/Controller';
import Clockface from './components/Clockface/Clockface';
import Splitbox from './components/Splitbox/Splitbox';

class StopWatch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
      showTime: '0:0.00',
      splits: [],
      isRunning: false,
    }
    this.startClock = this.startClock.bind(this);
    this.stopClock = this.stopClock.bind(this);
    this.resetClock = this.resetClock.bind(this);
    this.splitClock = this.splitClock.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  //  Formats the milliseconds to be used to show time.
  timeFormat(time) {
    let min = Math.floor((time / (1000 * 60)) % 60);
    let sec = ((time % 60000)/ 1000).toFixed(2);
    return `${min}:${sec}`;
  }

  // Controllermethods
  startClock() {
    this.setState(state => {
        const startTime = Date.now() - this.state.time;
        this.timer = setInterval(() => {
          this.setState({isRunning:true, time: Date.now() - startTime, showTime:this.timeFormat(Date.now()-startTime)});
        });
    });
  }
  resetClock() {
    this.setState({time: 0, isRunning:false, splits:[], showTime:'0:0.00'});
  }
  stopClock() {
    clearInterval(this.timer);
    this.setState({isRunning:false});
  }
  splitClock() {
    let time = this.state.showTime;
    let splits = this.state.splits;
    splits.unshift(time);
    this.setState({splits:splits});
  }


  render() {
    const {splitClock, startClock, stopClock, resetClock} = this; // Getting the methods from this.
    const {showTime, time, splits, isRunning} = this.state; // Getting the properties of state.
    
    return (
      <main>
        <h1>StopWatch</h1>
        <Clockface time={showTime} />

        <div className="btnBox">
          <Controller name={isRunning ? 'stop' : (time === 0 ? 'start':'resume')} onClick={isRunning ? stopClock : startClock} class={isRunning ? 'red' : 'green'}/>
          <Controller name={isRunning ? 'split' : 'reset'} onClick={isRunning ? splitClock : resetClock} class={isRunning ? 'green':'red'}/>
        </div>
        
        <Splitbox splits={splits} />
      </main>
    );
  }
}

export default StopWatch;