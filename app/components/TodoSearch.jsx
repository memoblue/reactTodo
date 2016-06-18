var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchField.value;

    this.props.onSearch(showCompleted, searchText);
  },
  render: function() {
    return (
      <div>
        <div>
          <input onChange={this.handleSearch} type="search" ref="searchField" placeholder="Search todos" />
        </div>
        <div>
          <label>
            <input onChange={this.handleSearch} type="checkbox" ref="showCompleted" />
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
