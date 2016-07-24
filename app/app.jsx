var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux')
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

// data
var TodoApi = require('TodoApi');
// redux
var actions = require('actions');
var store = require('configureStore').configure();
// react
var TodoApp = require('TodoApp');
import Login from 'Login';

// Initial todo loaded from Firebasw
store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// Styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/">
            <Route path="todo" component={TodoApp} />
            <IndexRoute component={Login} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
);
