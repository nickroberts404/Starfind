// src/js/table.js

var React = require('react');
var ReactDOM = require('react-dom');

var TableHead = React.createClass({
	getHeadElement: function(header){
		return (
			<th>{header}</th>
		)
	},
	render: function(){
		var headers = this.props.headers.map(this.getHeadElement);
		return(
			<thead>
				<tr>
					{headers}
				</tr>
			</thead>
		)
	}
})

module.exports = TableHead;