var expect = require('expect');

var todoApi = require('TodoApi');

describe('TodoApi', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(todoApi).toExist();
  });


  // TODO: test get and set


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
      var filteredTodos = todoApi.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });

    it('should return non-completed items if showCompleted is false', () => {
      var filteredTodos = todoApi.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
    });
  });

});
