// src/js/table.js

var React = require('react');
var TableHead = require('./table_head.js');
var TableBody = require('./table_body.js');

var header = [
	{value: 'Name'},
	{value: 'Con', label: 'Constellation'},
	{value: 'Mag', label: 'Magnitude'},
	{value: 'RA', label: 'Right Ascension'},
	{value: 'Dec', label: 'Declination'},
	{value: 'Dist', label: 'Distance'}
]

var Table = React.createClass({
	getDefaultProps() {
	    return {
	        data: [
	        	{id: 2345, con: 'Ori', mag: 2.5},
	        	{id: 34555, con: 'Tau', mag: 2.5},
	        	{id: 212, con: 'And', mag: 2.5},
	        ]  
	    };
	},
	render: function(){
		return(
			<table className="table table-hover">
				<TableHead headers={['Name', 'Con', 'Mag', 'RA', 'Dec', 'Dist']} />
				<TableBody 
					data={this.props.data} 
					onRowClick={this.props.onRowClick} 
					selectedStars={this.props.selectedStars} />
			</table>
		)
	}
})

module.exports = Table;