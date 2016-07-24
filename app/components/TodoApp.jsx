var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
  render: function() {
    return (
      <div className="todo">
        <div className="auth__logout">
          <a href="#">Logout</a>
        </div>
        <h1 className="layout__title">Todo app</h1>
        <div className="row">
          <div className="colum small-centered small-11 medium-6 large-5">
            <div className="todo__ui">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
