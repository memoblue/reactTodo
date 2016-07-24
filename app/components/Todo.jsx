var React = require('react');
var { connect } = require('react-redux');
var moment = require('moment');

var actions = require('actions');

export var Todo = React.createClass({
  render: function() {
    // dispatch is availble on props via connect()
    var { id, text, completed, createdAt, completedAt, dispatch } = this.props;
    var todoClassName = completed ? 'todo__todo todo__todo--completed' : 'todo__todo';
    var renderDate = () => {
      var msg = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        msg = 'Completed ';
        timestamp = completedAt;
      }

      return msg + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    } ;
    return (
      <div className={todoClassName}>
        <p><label><input type="checkbox" checked={completed} onChange={() => { dispatch(actions.startToggleTodo(id, !completed)) }} /> {text}</label></p>
        <p className="todo__todo__date">{renderDate()}</p>
      </div>
    );
  }
});

export default connect()(Todo);
