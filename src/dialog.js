import React from 'react';

class FancyBorder extends React.Component{
  
  render() {
    return (
      <div className={'FancyBorder FancyBorder-' + this.props.color}>
        {this.props.children}
      </div>
    );
  }
}

export default class Dialog extends React.Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      
      <FancyBorder color="blue">
        
        <h1 className="Dialog-title">
          {this.props.title}
        </h1>
        <p className="Dialog-message">
          {this.props.message}
        </p>
        {this.props.children}
      </FancyBorder>
    );
  }
}