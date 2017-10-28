var React = require('react');
var ReactDOM = require('react-dom');
var ReactTest = require('react-test');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactTest />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
