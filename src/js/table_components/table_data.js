// src/js/table.js

var React = require('react');

var Data = React.createClass({
	render: function(){
		var className = this.props.highlight ? 'text-primary' : '';
		return(
			<td className={className}>
				{this.props.data}
			</td>
		)
	}
})

module.exports = Data;