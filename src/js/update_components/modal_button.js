// src/js/modal_button.js

var React = require('react');

var ModalButton = React.createClass({
	render: function(){
		var className = this.props.isVisible ? '' : 'hidden'
		return(
			<button 
				className={"btn btn-success "+className}
				id="update-btn"
				data-toggle='modal' 
				data-target='#new-con-modal'>
				{this.props.text}
			</button>
		)
	}
})

module.exports = ModalButton;