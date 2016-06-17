var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: 'Drink water'
        },
        {
          id: 2,
          text: 'Take vitamin'
        },
        {
          id: 3,
          text: 'Learn React'
        },
        {
          id: 4,
          text: 'Meditate'
        }
      ]
    }
  },
  handleAddTodo: function(text) {
    console.log(`new todo added with ${text}`);
  },
  render: function() {
    var { todos } = this.state;

    return (
      <div>
        <h1 className="text-center">To do</h1>
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
