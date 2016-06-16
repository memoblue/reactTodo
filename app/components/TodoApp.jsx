var React = require('react');

var TodoApp = React.createClass({
  render: function() {
    return (
      <div>
        <h1 className="text-center">To do</h1>
        {/* {props.children} */}
      </div>
    );
  }
});

module.exports = TodoApp;
