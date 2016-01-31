// src/js/app.js

var React = require('react');
var ReactDOM = require('react-dom');
var skyglass = require('skyglass');
var Form = require('./form_components/form.js');
var Table = require('./table_components/table.js');
var Paginator = require('./paginator.js')

var App = React.createClass({
	getInitialState: function(){
		return {
			limit: 50,
			count: 0,
			stars: [],
			selectedStars: {},
			query: {},
			currentPage: 1
		}
	},
	componentWillMount: function(){
		this.loadStars({});
	},
	loadStars: function(options, reload){
		if (reload) this.setState({currentPage: 1})
		this.setState({query: options});
		options.limit = this.state.limit;
		var self = this;
		skyglass.getStars(options, function(err, res, data){
			if (err) console.error('Error: ', err);
			else {
				data = JSON.parse(data);
				console.log(data);
				self.setState({stars: data.stars, count: data.count});
			}
		})
	},
	onRowClick: function(event, id){
		var selectedStars = this.state.selectedStars;
		if (this.state.selectedStars[id]) delete selectedStars[id];
		else selectedStars[id] = true;
		console.log(selectedStars);
		this.setState({selectedStars: selectedStars});
	},
	handlePageChange: function(e){
		var query = this.state.query;
		query.page = e.selected+1;
		this.setState({query: query, currentPage: query.page});
		this.loadStars(query);

	},
	render: function(){
		return(
			<div className="container">
				<h1 className="text-center">Starfind</h1>
				<Form onSubmit={this.loadStars}/>
				<Paginator 
					currentPage={this.state.currentPage}
					pages={Math.ceil(this.state.count/this.state.limit)} 
					pageChange={this.handlePageChange} />
				<Table 
					data={this.state.stars} 
					onRowClick={this.onRowClick} 
					selectedStars={this.state.selectedStars} />
			</div>
		)
	}
})

ReactDOM.render(<App title="Starfind"/>, document.getElementById('app'));