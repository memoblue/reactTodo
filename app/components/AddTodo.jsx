var React = require('react');
var { connect } = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var { dispatch } = this.props;
    var todo = this.refs.todoField.value;

    if (todo.length > 0) {
      this.refs.todoField.value = '';
      dispatch(actions.startAddTodo(todo));
    } else {
      this.refs.todoField.focus();
    }
  },
  render: function() {
    return (
      <div className="todo__ui__footer">
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="todoField" placeholder="Enter your next to do" />
          <button className="button expanded">Add To do</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
