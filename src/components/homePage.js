"use strict";

var React = require('react');

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>PS admin</h1>
				<p>React, RR, Flux for ultra-response</p>
			</div>
		);
	}
});

module.exports = Home;