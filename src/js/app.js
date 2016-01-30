// src/js/app.js

var React = require('react');
var ReactDOM = require('react-dom');
var skyglass = require('skyglass');
var Table = require('./table.js');

var App = React.createClass({
	getInitialState: function(){
		return {
			starCount: 0,
			stars: [],
			selectedStars: {},
		}
	},
	componentWillMount: function(){
		this.loadStars({});
	},
	loadStars: function(options){
		var self = this;
		skyglass.getStars(options, function(err, res, data){
			if (err) console.error('Error: ', err);
			else {
				data = JSON.parse(data);
				self.setState({stars: data.stars, starCount: data.count});
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
	render: function(){
		return(
			<div className="container">
				<h1> Welcome to {this.props.title}</h1>
				<Table 
					data={this.state.stars} 
					onRowClick={this.onRowClick} 
					selectedStars={this.state.selectedStars} />
			</div>
		)
	}
})

ReactDOM.render(<App title="Starfind"/>, document.getElementById('app'));