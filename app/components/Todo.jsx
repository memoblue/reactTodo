var React = require('react');
var moment = require('moment');


var Todo = React.createClass({
  render: function() {
    var { id, text, completed, createdAt, completedAt } = this.props;
    var todoClassName = completed ? 'timer__todo timer__todo--completed' : 'timer__todo';
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
        <p><label><input type="checkbox" checked={completed} onChange={() => { this.props.onToggle(id) }} /> {text}</label></p>
        <p className="timer__todo__date">{renderDate()}</p>
      </div>
    );
  }
});

module.exports = Todo;
