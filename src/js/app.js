// src/js/app.js

var React = require('react');
var ReactDOM = require('react-dom');
var skyglass = require('skyglass');

// skyglass.getStars(function(err, response, data){ console.log(JSON.parse(data)); });

var App = React.createClass({
	render: function(){
		return(
			<h1> Welcome to {this.props.title}</h1>
		)
	}
})

ReactDOM.render(<App title="Starfind"/>, document.getElementById('app'));