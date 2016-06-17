var React = require('react');

var Todo = React.createClass({
  render: function() {
    var { id, text } = this.props;
    return (
      <div>
        <strong>{id}:</strong> {text}
      </div>
    );
  }
});

module.exports = Todo;
