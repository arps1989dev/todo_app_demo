import React, { Component } from 'react';

export default class Greeting extends React.Component {
	render(){
		
		return(
			<p> {this.props.isLoggedIn ? "welcome back" : "Please sign in"} </p>		
		)
	}
}