// src/js/form.js

var React = require('react');
var SearchBar = require('./search_bar.js');
var ConstellationSelect = require('./constellation_select.js');
var MagnitudeSelect = require('./magnitude_select.js')
var Find = require('./find.js')

var Form = React.createClass({
	getInitialState: function(){
		return {
			constellationValue: null,
			magnitudeValue: null,
			searchValue: null
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
	render: function(){
		return(
			<form onSubmit={submitForm}>
				<SearchBar value={this.state.searchValue} onChange={this.updateSearch}/>
				<ConstellationSelect value={this.state.constellationValue} onChange={this.updateConstellation} />
				<MagnitudeSelect value={this.state.magnitudeValue} onChange={this.updateMagnitude} />
				<Find />
			</form>
		)
	}
})

function submitForm(a, b, c){
	a.preventDefault();
}

module.exports = Form;