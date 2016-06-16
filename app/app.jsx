var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var TodoApp = require('TodoApp');

// Load foundation
$(document).foundation();

// Styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={TodoApp}>
        </Route>
    </Router>,
    document.getElementById('app')
);
