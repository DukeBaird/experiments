import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content.jsx';
import { action, observable } from "mobx"

class List {
	@observable list = [{title: "FIRST"}];

	// constructor() {
	// 	mobx.autorun(() => console.log("changing?"));
	// }

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
