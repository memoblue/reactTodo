var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var todo = this.refs.todoField.value;

    if (todo.length > 0) {
      this.refs.todoField.value = '';
      this.props.onAddTodo(todo);
    } else {
      this.refs.todoField.focus();
    }
  },
  render: function() {
    return (
      <div className="timer__ui__footer">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todoField" placeholder="Enter your next to do" />
          <button className="button expanded">Add To do</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
