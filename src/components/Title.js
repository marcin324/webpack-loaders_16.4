import React from 'react';

class Title extends React.Component {
	
	render(){

		return (
			<div>
				<h1>Things to do</h1>
				<p>Number of things to do: {this.props.quantity}</p>
			</div>
		)
	}
}

export default Title;