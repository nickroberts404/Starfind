// src/js/paginator.js

var React = require('react');
var ReactPaginate = require('react-paginate');

var Paginator = React.createClass({
	render: function(){
	console.log(this.props.currentPage);
		return(
			<div className= "pagination-container">
				<ReactPaginate 
					previousLabel={"Previous"}
					nextLabel={"Next"}
					forceSelected={this.props.currentPage - 1}
					pageNum={this.props.pages}
					clickCallback={this.props.pageChange}
					breakLabel={<li className="break"><a href="">...</a></li>}
					marginPagesDisplayed={1}
					pageRangeDisplayed={3}
					containerClassName={"pagination"}
					subContainerClassName={"pages pagination"}
					activeClassName={"active"} 
					nextClassName={"next"} 
					previousClassName={"previous"}/>
			</div>
		)
	}
})

                       // pageNum={this.state.pageNum}

                       // clickCallback={this.handlePageClick}
module.exports = Paginator;