var expect = require('expect');
var df = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
      it('should set searchText', () => {
        var action = {
          type: 'SET_SEARCH_TEXT',
          searchText: 'some search text'
        };
        var res = reducers.searchTextReducer(df(''), df(action));

        expect(res).toEqual(action.searchText);
      });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '123',
          text: 'Something to do',
          completed: false,
          createdAt: 2341
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {
      var todos = [
        {
          id: '123',
          text: 'some todo',
          completed: true,
          createdAt: 123,
          completedAt: 125
        }
      ];
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates: {
          completed: false,
          completedAt: null
        }
      };
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(null);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
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
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it('should remove all todos', () => {
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
        type: 'REMOVE_TODOS'
      };
      var res = reducers.todosReducer(df(todos), df(action));
      expect(res).toEqual([]);
    });

  });

  describe('authReducer', () => {
    it('should add uid to store on login', () => {
      const action = {
        type: 'LOGIN',
        uid: '123'
      };
      const res = reducers.authReducer(undefined, df(action)); // undefined means we use default {}

      expect(res).toEqual({
        uid: action.uid
      });
    });

    it('should reset auth to empty object on logout', () => {
      const authData = {
        auth: '123'
      };
      const action = {
        type: 'LOGOUT'
      };
      const res = reducers.authReducer(df(authData), df(action));

      expect(res).toEqual({});
    });

  });
});
