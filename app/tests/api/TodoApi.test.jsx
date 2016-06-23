var expect = require('expect');

var TodoApi = require('TodoApi');

describe('TodoApi', () => {
  beforeEach(() => { // Mocah method
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoApi).toExist();
  });


  describe('setTodos', () => {
    it('should set valid todos array'), () => {
      var todos = [{
        id: 1,
        text: 'Sample todo text',
        completed: false
      }];
      TodoApi.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    };

    it('should not set invalid todos array', () => {
      var invalidTodos = { a: 'b' };
      TodoApi.setTodos(invalidTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return an empty array for invalid localStorage data', () => {
      var actualTodos = TodoApi.getTodos();

      expect(actualTodos).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      var todos = [{
        id: 1,
        text: 'Sample todo text',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoApi.getTodos();

      expect(actualTodos).toEqual(todos);
    });
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
        text: 'Second text example',
        completed: false
      },
      {
        id: 3,
        text: 'Third text example',
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
  });

});
