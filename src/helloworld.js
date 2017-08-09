import React from 'react';

class Hello extends React.Component {
  render() {
    return(
      <div>Hello {this.props.toWhat}</div>
    );
  }
}
export default class HelloWorld extends React.Component {
  render() {
    return(
      <Hello toWhat="World" />
    );
  }
}