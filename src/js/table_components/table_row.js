// src/js/table_row.js

var React = require('react');

var TableRow = React.createClass({
	getColumn: function(property){
		var key = this.props.data.id+property;
		return (
			<td key={key}>{this.props.data[property]}</td>
		)
	},
	handleClick: function(e){
		this.props.onRowClick(e, this.props.data.id);
	},
	render: function(){
		var columns = this.props.properties.map(this.getColumn);
		var className = this.props.selected ? 'selected' : '';
		return(
			<tr 
				className={className} 
				onClick={this.handleClick}>
				{columns}
			</tr>
		)
	}
})

module.exports = TableRow;