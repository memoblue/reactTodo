var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var { todos } = this.props;
    var renderList = () => {
      if (todos.length === 0) {
        return (<p className="timer__ui__placeholder">Nothing to do…</p>);
      } else {
        return (
          todos.map((todo) => {
            return (<Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />);
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

module.exports = TodoList;
