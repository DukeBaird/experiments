import React, {PropTypes} from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';



class Content extends React.Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div className='contentArea'>
				Hello!
			</div>
		)
	}
}

export default Content;