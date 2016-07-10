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

store.subscribe(() => {
  var state = store.getState();
  TodoApi.setTodos(state.todos);
});

var todos = TodoApi.getTodos();
store.dispatch(actions.addTodos(todos));

// Load foundation
$(document).foundation();

// Styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
    document.getElementById('app')
);
