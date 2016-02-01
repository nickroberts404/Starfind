// src/js/modal_button.js

var React = require('react');

var ModalButton = React.createClass({
	render: function(){
		var className = this.props.isVisible ? '' : 'hidden'
		return(
			<button 
				className={"update-btn btn "+className+' '+this.props.className+' '+this.props.id}
				id={this.props.id} 
				onClick={this.props.onClick} >
				{this.props.text}
			</button>
		)
	}
})

module.exports = ModalButton;