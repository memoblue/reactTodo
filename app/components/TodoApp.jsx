import React from 'react';
import * as Redux from 'react-redux'

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import * as actions from 'actions';

export var TodoApp = React.createClass({
  onLogout(e) {
    var { dispatch } = this.props;
    e.preventDefault();
    dispatch(actions.startLogout());
  },
  render() {
    return (
      <div className="todo">
        <div className="auth__logout">
          <a href="#" onClick={this.onLogout}>Logout</a>
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

export default Redux.connect()(TodoApp);
