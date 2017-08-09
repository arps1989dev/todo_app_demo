import React from 'react';

export default class Mailbox extends React.Component {
	
	render() {
		
		return(
			<div>
				<h1>Hello !</h1>
				{this.props.unreadMessages.length} > 0 &&
					<h2>
						You have {this.props.unreadMessages.length} unread Messages.
					</h2>
			</div>
		);
	}
}