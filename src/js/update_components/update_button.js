// src/js/modal_button.js

var React = require('react');

var UpdateButton = React.createClass({
	render: function(){
		var className = this.props.isVisible ? '' : 'hidden'
		return(
			<div className={"btn-group update-btn "+className}>
				<button 
					className="btn btn-success"
					onClick={this.props.add} >
					Add
				</button>
				<button 
					className="btn btn-danger"
					onClick={this.props.remove} >
					Remove
				</button>
			</div>
		)
	}
})

module.exports = UpdateButton;