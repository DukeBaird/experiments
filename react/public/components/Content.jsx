import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

@observer
class Content extends React.Component {

	render() {
		const list = this.props.list;

		return (
			<div>
				<ul>
					{list.list.map((item, i) => 
						<ListItem item={ item } idx={ i } remove={ this.deleteMe }/>
					)}
				</ul>
				<button onClick={ this.clickMe }>Click Me</button>
			</div>
		)
	}

	clickMe = () => {
		this.props.list.addItem({
			title: "Ben"
		});
	}

	deleteMe = (event) => {
		// console.log(event);
		// console.log(event.target);
		this.props.list.removeItem(0);
	}
}

@observer
class ListItem extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return(
			<li>
				{this.props.item.title}
				<button onClick={ this.props.remove }>Remove</button>
			</li>
		)
	}
}

export default Content;