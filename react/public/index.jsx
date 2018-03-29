import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content.jsx';
import { action, observable } from "mobx"

class List {
	@observable list = [];

	get() {
		fetch("https://api.github.com/repos/burczu/react-redux-ajax-example/branches")
			.then(response => {
			return response.json();
		}).then(function(data) {
			this.list = data;
		}.bind(this)).catch(error => {
			return error;
		});
	}

	@action
	addItem(item) {
		this.list.push(item);
	}

	@action
	removeItem(index) {
		this.list.splice(index, 1);
	}
}

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Content list={new List()} />
		</div>
	</BrowserRouter>,
	document.getElementById('root')
);
