// src/js/update.js

var React = require('react');

var Update = React.createClass({
	render: function(){
		return(
			<div id="new-con-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" className="modal fade">
				<div role="document" className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<button data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">&times;</span></button>
							<h4 id="myModalLabel" className="modal-title">Star JSON</h4>
						</div>
						<div className="modal-body"></div>
						<div className="modal-footer">
							<button data-dismiss="modal" onClick={this.props.addToConstellation} className="btn btn-default">Add To Constellation</button>
							<button data-dismiss="modal" onClick={this.props.removeFromConstellation} className="btn btn-default">Remove From Constellation</button>
							<button data-dismiss="modal" onClick={this.props.unselectAll} className="btn btn-default">Cancel</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Update;