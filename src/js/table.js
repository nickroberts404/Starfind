// src/js/table.js

var React = require('react');
var ReactDOM = require('react-dom');
var TableHead = require('./table_head.js');

var Table = React.createClass({

	render: function(){
		return(
			<table className="table">
				<TableHead headers={['Name', 'Constellation', 'Magnitude']} />
			</table>
		)
	}
})

module.exports = Table;