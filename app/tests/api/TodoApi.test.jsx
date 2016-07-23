var expect = require('expect');

var TodoApi = require('TodoApi');

describe('TodoApi', () => {
  beforeEach(() => { // Mocah method
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoApi).toExist();
  });

  describe('filterTodos', () => {
    var todos = [
      {
        id: 1,
        text: 'First text example',
        completed: true
      },
      {
        id: 2,
        text: 'Some second text example',
        completed: false
      },
      {
        id: 3,
        text: 'Some third text example',
        completed: true
      }
    ];

    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoApi.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return non-completed items if showCompleted is false', () => {
      var filteredTodos = TodoApi.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort todos with completed items at the bottom', () => {
      var sortedTodos = TodoApi.filterTodos(todos, true, '');
      expect(sortedTodos[0].completed).toBe(false);
    })

    it('should return all todos if searchText is empty', () => {
      var filteredTodos = TodoApi.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should filter todos by searchText', () => {
      var filteredTodos = TodoApi.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);
    });

  });

});
