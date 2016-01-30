// src/js/magnitude_select.js

var React = require('react');

var MagnitudeSelect = React.createClass({
	getInitialState: function(){
		return {
			value: null
		}
	},
	updateValue: function(e){
		var val = e.target.value;
		var newval = val > 7 ? 7 : val < -3 ? -3 : val;
		this.props.onChange(newval);
	},
	render: function(){
		return(
			<div className="form-group">
				<input
					type="number"
					name="magnitude-select"
					id="magnitude-select"
					placeholder="Magnitude"
					value={this.props.value}
					onChange={this.updateValue}
					className="form-control" />
			</div>
		)
	}
})

module.exports = MagnitudeSelect;