// src/js/app.js

var React = require('react');
var ReactDOM = require('react-dom');
var Table = require('./table.js');

var App = React.createClass({
	render: function(){
		return(
			<div className="container">
				<h1> Welcome to {this.props.title}</h1>
				<Table />
			</div>
		)
	}
})

ReactDOM.render(<App title="Starfind"/>, document.getElementById('app'));