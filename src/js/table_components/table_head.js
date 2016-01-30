// src/js/table.js

var React = require('react');

var TableHead = React.createClass({
	getHeadElement: function(header){
		var key = header;
		return (
			<th key={key}>{header}</th>
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