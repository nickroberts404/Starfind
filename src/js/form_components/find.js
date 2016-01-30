// src/js/find.js

var React = require('react');

var Find = React.createClass({
	render: function(){
		return(
			<input 
				type="submit" 
				className="btn btn-primary"
				value="Find"
			/>
		)
	}
})

module.exports = Find;