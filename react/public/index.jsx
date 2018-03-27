import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content.jsx';
import { observable } from "mobx"

class List {
	@observable list = [{title: "FIRST"}];

	// constructor() {
	// 	mobx.autorun(() => console.log("changing?"));
	// }

	addItem(item) {
		console.log("Add Item");
		this.list.push(item);
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
