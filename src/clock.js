import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
 
  // handleClick(e) {
  //   e.preventDefault();
  //   console.log('The link was clicked.');
  // }
 

  
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
         <a target='_blank' href="#" onclick="console.log('The link was clicked.'); return false">
            Click me
          </a>
      </div>
    );
  }
}
