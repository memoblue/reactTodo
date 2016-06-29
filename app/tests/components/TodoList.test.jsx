var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery'); // from webpack.ProvidePlugin in webpack.config.js
var TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component per todo items', () => {
    var todos = [
      {
        id: 1,
        text: 'First to do item'
      },
      {
        id: 2,
        text: 'Second to do item'
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todoComponents.length).toBe(todos.length);
  });

  it('should render placeholder text if todo list is empty', () => {
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.timer__ui__placeholder').length).toBe(1);
  });
});
