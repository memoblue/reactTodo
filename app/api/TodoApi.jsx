var $ = require('jquery');

module.exports = {
  setTodos: function(todos) {
    if($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos; // useful to use this function in conditionals etc.
    }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {
      console.log(e);
    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;
    // filter out completed
    filteredTodos = filteredTodos.filter((todo) => { // filter keeps truthy
      return !todo.completed || showCompleted; // OR to show all todos when state.showCompleted is true
    });
    // filter by search

    // sort todos with non-comleted on top

    return filteredTodos;
  }
};
