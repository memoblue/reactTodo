var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux')
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

// redux
var actions = require('actions');
var store = require('configureStore').configure();
// react
var TodoApp = require('TodoApp');

// store.subscribe(() => {
//   console.log('State: ', store.getState());
// });

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
