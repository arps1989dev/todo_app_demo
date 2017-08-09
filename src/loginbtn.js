import React from 'react';

export default class LoginBtn extends React.Component {
	render(){
		return (
			<button onClick={this.props.onClick}>
				Login
			</button>
		);
	}
}