import React from 'react';

import LogoutBtn from './logoutbtn';
import LoginBtn from './loginbtn';


export default class LoggingButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = {isLoggedIn: false};
	}
	
	handleLoginClick() {
		this.setState({isLoggedIn: true});
	}
	handleLogoutClick() {
		this.setState({isLoggedIn: false});
	}

	render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
			The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in. <br/>
      {isLoggedIn ? (<LogoutBtn onClick={this.handleLogoutClick} />) : (<LoginBtn onClick={this.handleLoginClick} />)
			}
    </div>
  );
}
}