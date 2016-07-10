var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
  render: function() {
    return (
      <div className="timer">
        <h1 className="text-center timer__title">To do app</h1>
        <div className="row">
          <div className="colum small-centered small-11 medium-6 large-5">
            <div className="timer__ui">
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
