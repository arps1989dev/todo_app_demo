import React from 'react';

export default class LogoutBtn extends React.Component {
	render(){
		return (
			<button onClick={this.props.onClick}>
				Logout
			</button>
		);
	}
}