var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux')
var { hashHistory } = require('react-router');
import firebase from 'app/firebase';

var actions = require('actions');
var store = require('configureStore').configure();
import router from 'app/router/'

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos()); // Initial todo loaded from Firebase
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    store.dispatch(actions.removeTodos());
    hashHistory.push('/');
  }
});

store.subscribe(() => {
  console.log(store.getState());
});

// Load foundation
$(document).foundation();

// Styles
require('style!css!sass!applicationStyles');


ReactDOM.render(
    <Provider store={store}>
      {router}
    </Provider>,
    document.getElementById('app')
);
