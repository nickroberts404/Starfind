// src/js/table.js

var React = require('react');
var ReactDOM = require('react-dom');
var TableHead = require('./table_head.js');
var TableBody = require('./table_body.js');

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
				<TableHead headers={['ID', 'Constellation', 'Magnitude']} />
				<TableBody 
					data={this.props.data} 
					properties={['id', 'con', 'mag']} 
					onRowClick={this.props.onRowClick} 
					selectedStars={this.props.selectedStars} />
			</table>
		)
	}
})

module.exports = Table;