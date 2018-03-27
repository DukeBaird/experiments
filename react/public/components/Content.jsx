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
					{list.list.map(item => 
						<ListItem item={item} />
					)}
				</ul>
				<button onClick={ this.clickMe }>Click Me</button>
			</div>
		)
	}

	clickMe = () => {
		console.log('click');

		this.props.list.addItem({
			title: "Ben"
		});
	}
}

const ListItem = observer(({item}) =>
	<li>
		{item.title}
	</li>
)

export default Content;