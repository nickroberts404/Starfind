// src/js/table_row.js

var React = require('react');
var ReactDOM = require('react-dom');

var TableRow = React.createClass({
	getColumn: function(property){
		var key = this.props.data.id+property;
		return (
			<td key={key}>{this.props.data[property]}</td>
		)
	},
	render: function(){
		var columns = this.props.properties.map(this.getColumn);
		return(
			<tr>{columns}</tr>
		)
	}
})

module.exports = TableRow;