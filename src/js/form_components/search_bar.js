// src/js/search_bar.js

var React = require('react');

var SearchBar = React.createClass({
	render: function(){
		return(
			<div className="form-group">
				<input 
					type="search"
					name="search"
					id="search"
					value={this.props.value}
					onChange={this.props.onChange}
					placeholder="Search"
					className="form-control"
					/>
			</div>
		)
	}
})

module.exports = SearchBar;