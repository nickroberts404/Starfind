// src/js/table_row.js

var React = require('react');
var Data = require('./table_data.js')

var TableRow = React.createClass({
	handleClick: function(e){
		this.props.onRowClick(e, this.props.data.id);
	},
	render: function(){
		var className = this.props.selected ? 'selected' : '';
		return(
			<tr 
				className={className} 
				onClick={this.handleClick}>
				<Data data={this.props.data.proper || this.props.data.bf} />
				<Data data={this.props.data.con} highlight={this.props.data.incon} />
				<Data data={this.props.data.mag} />
				<Data data={this.props.data.ra.toFixed(2)} />
				<Data data={this.props.data.dec.toFixed(2)} />
				<Data data={this.props.data.dist.toFixed(2)} />
			</tr>
		)
	}
})

module.exports = TableRow;