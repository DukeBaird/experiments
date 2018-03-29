import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

@observer
class Content extends React.Component {

	componentDidMount() {
		this.props.list.get();
	}

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
			name: "Ben"
		});
	}

	deleteMe = (event) => {
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
				{this.props.item.name}
				<button onClick={ this.props.remove }>Remove</button>
			</li>
		)
	}
}

export default Content;