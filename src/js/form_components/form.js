// src/js/form.js

var React = require('react');
var SearchBar = require('./search_bar.js');
var ConstellationSelect = require('./constellation_select.js');
var MagnitudeSelect = require('./magnitude_select.js')
var Find = require('./find.js')

var Form = React.createClass({
	getInitialState: function(){
		return {
			searchValue: null,
			constellationValue: null,
			magnitudeValue: null,
			parameterValue: 'lt'
		}
	},
	updateSearch: function(e){
		// Not processing data in Search component, will do it here
		var val = e.target.value
		this.setState({searchValue: val});
	},
	updateConstellation: function(val){
		this.setState({constellationValue: val});
	},
	updateMagnitude: function(val){		
		this.setState({magnitudeValue: val});
	},
	updateParameter: function(val){		
		// Not processing data in Magnitude Select component, will do it here
		val = this.state.parameterValue == 'lt' ? 'gt' : 'lt';
		this.setState({parameterValue: val});
	},
	submitForm: function(a){
		a.preventDefault();
		var options = {};
		if(this.state.searchValue) options.search = this.state.searchValue;
		if(this.state.constellationValue) options.con = this.state.constellationValue;
		if(this.state.magnitudeValue !== null) options.mag = this.state.magnitudeValue;
		if(this.state.parameterValue && this.state.magnitudeValue !== null) options.magparam = this.state.parameterValue;
		console.log(options);
		this.props.onSubmit(options, true)
	},
	render: function(){
		return(
			<form onSubmit={this.submitForm}>
				<SearchBar 
					value={this.state.searchValue} 
					onChange={this.updateSearch}/>
				<ConstellationSelect 
					value={this.state.constellationValue} 
					onChange={this.updateConstellation} />
				<MagnitudeSelect 
					value={this.state.magnitudeValue} 
					onChange={this.updateMagnitude} 
					onParameterChange={this.updateParameter}
					param={this.state.parameterValue} />
				<Find />
			</form>
		)
	}
})

module.exports = Form;