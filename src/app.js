import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/header';
import './style/style.scss';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
			</div>
		);
	}
}
ReactDOM.render(
	<App />,
	document.getElementById('root'),
);
