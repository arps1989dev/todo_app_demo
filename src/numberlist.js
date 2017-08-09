import React from 'react';
export default class NumberList extends React.Component {

	// constructor(props) {
	//   super(props);
		
		
	// }
	ListItem(props){
		// var numbers = props.numbers;
	}
	render(){ 
		// var numbers = this.numbers;
		var numbers = [1,2,3,4,5];
		var listItems = numbers.map((number) =>
			<li key={number.toString()}>
				{number}
			</li>
		);	
		return (
		 <ul>{listItems}</ul>
		);
		}

}