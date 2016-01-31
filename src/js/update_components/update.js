// src/js/update.js

var React = require('react');
var Modal = require('./modal.js');
var ModalButton = require('./modal_button.js');

var Update = React.createClass({
	render: function(){
		return(
			<div className="update-components">
				<ModalButton 
					text="Update Constellation" 
					isVisible={this.props.showButton} />
				<Modal 
					addToConstellation={this.props.add}
					removeFromConstellation={this.props.remove}
					unselectAll={this.props.unselect}
				/>
			</div>
		)
	}
})

module.exports = Update;