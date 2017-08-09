import React from 'react';

export default class NumberDescriber extends React.Component {
  render() {
    let description;
    var number = 10;
    
    if(number % 2 === 0) {
      description = <strong>even</strong>
    } else {
      description = <i>odd</i>
    }
    return(
      <div>{number} is an {description} number</div>
    );
  }
}