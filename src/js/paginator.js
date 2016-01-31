// src/js/table.js

var React = require('react');
var ReactPaginate = require('react-paginate');

var Paginator = React.createClass({
	render: function(){
	console.log(this.props.currentPage);
		return(
			<ReactPaginate 
				previousLabel={"<"}
				nextLabel={">"}
				forceSelected={this.props.currentPage - 1}
				pageNum={this.props.pages}
				clickCallback={this.props.pageChange}
				breakLabel={<li className="break"><a href="">...</a></li>}
				marginPagesDisplayed={1}
				pageRangeDisplayed={3}
				id="react-paginate"
				containerClassName={"pagination"}
				subContainerClassName={"pages pagination"}
				activeClassName={"active"} />
		)
	}
})

                       // pageNum={this.state.pageNum}

                       // clickCallback={this.handlePageClick}
module.exports = Paginator;