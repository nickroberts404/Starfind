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
		if(!isNaN(val)) this.props.onChange(val);
	},
	render: function(){
		return(
			<div className="form-group">
				<div className="input-group">
					<span className="input-group-btn">
				    	<input 
				    		className="btn btn-default" 
				    		type="button"
				    		value={this.props.param == 'gt'? 'Greater Than' : 'Less Than'}
				    		onClick={this.props.onParameterChange} />
				    </span>
					<input
						type="number"
						step="0.01"
						max="7"
						min="-2"
						name="magnitude-select"
						id="magnitude-select"
						placeholder="Magnitude"
						value={this.props.value}
						onChange={this.updateValue}
						className="form-control" />
				</div>
			</div>
		)
	}
})

module.exports = MagnitudeSelect;