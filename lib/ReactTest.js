'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var React = require('react');

var ReactTest = React.createClass({
	displayName: 'ReactTest',

	render: function render() {
		return React.createElement(
			'div',
			null,
			'react-test',
			React.createElement(
				'p',
				null,
				'Kishore'
			)
		);
	}
});

exports['default'] = ReactTest;
module.exports = exports['default'];