$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');

var App = React.createClass({
	render: function() {
		var Child;

		switch(this.props.route) {
			case 'about': Child = About; break;
			default: Child = Home;
		}

		return (
			<div>
				<Child/>
			</div>
		);
	}
});

React.render(<Home />, document.getElementById('app'));