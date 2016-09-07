"use strict";

var React = require('react');

var Home = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
				<h1>PS admin</h1>
				<p>React, RR, Flux for ultra-responsive web apps</p>
			</div>
		);
	}
});

module.exports = Home;