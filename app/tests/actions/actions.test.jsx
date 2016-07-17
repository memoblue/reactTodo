var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate SET_SEARCH_TEXT action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'some search text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate TOGGLE_SHOW_COMPLETED action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate ADD_TODO action', () => {
    var action = {
      type: 'ADD_TODO',
      todo: {
        id: '123',
        text: 'Some text',
        completed: false,
        createdAt: 123456
      }
    };
    var res = actions.addTodo(action.todo);

    expect(res).toEqual(action);
  });

  it('should generate ADD_TODOS action', () => {
    var todos = [
      {
        id: '123',
        text: 'some text',
        completed: false,
        completedAt: undefined,
        createdAt: 500
      }
    ];
    var action = {
      type: 'ADD_TODOS',
      todos
    };
    var res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate TOGGLE_TODO action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: '123'
    }
    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });

});
