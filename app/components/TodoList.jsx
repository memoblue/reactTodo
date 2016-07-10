var React = require('react');
var { connect } = require('react-redux');
import Todo from 'Todo';
var TodoApi = require('TodoApi');

export var TodoList = React.createClass({
  render: function() {
    var { todos, showCompleted, searchText } = this.props; // props set via connect() at the end
    var renderList = () => {
      if (todos.length === 0) {
        return (<p className="timer__ui__placeholder">Nothing to do…</p>);
      } else {
        return (
          TodoApi.filterTodos(todos, showCompleted, searchText).map((todo) => {
            return (<Todo key={todo.id} {...todo} />);
          })
        );
      }
    };

    return (
      <div>
        {renderList()}
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
