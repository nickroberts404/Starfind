// src/js/constellation_select.js

var React = require('react');
var Select = require('react-select');
var ConstellationNames = require('../data/constellation_names.json');

var options = ConstellationNames.map(function(a){
	return { value: a.abbr, label: a.name }
})

var ConstellationSelect = React.createClass({
	updateValue: function(val){
    	val = val ? val.value : null;
    	this.props.onChange(val);
	},
	render: function(){
		return(
			<Select
				name="constellation-select"
				id="constellation-select"
				value={this.props.value}
				options={options}
				onChange={this.updateValue} />
		)
	}
})

module.exports = ConstellationSelect;