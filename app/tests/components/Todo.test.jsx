var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery'); // from webpack.ProvidePlugin in webpack.config.js
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop with id on change', () => {
    var todoData = {
      id: 10,
      text: 'Test text',
      completed: true
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);

    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.change($el.find('input:checkbox')[0]);
    expect(spy).toHaveBeenCalledWith(todoData.id);
  });
});
