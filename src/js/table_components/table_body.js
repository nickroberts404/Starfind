// src/js/table.js

var React = require('react');
var TableRow = require('./table_row.js');

var TableBody = React.createClass({
	getRows: function(data){
		return (
			<TableRow 
				key={'r'+data.id} 
				data={data} 
				properties={this.props.properties} 
				onRowClick={this.props.onRowClick} 
				selected={this.props.selectedStars[data.id]} /> 
		)
	},
	render: function(){
		var tableRows = this.props.data.map(this.getRows);
		return(
			<tbody>
				{tableRows}
			</tbody>
		)
	}
})

module.exports = TableBody;