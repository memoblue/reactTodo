var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery'); // from webpack.ProvidePlugin in webpack.config.js
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  });

  it('should call onSearch with entered input text', () => {
    var searchText = 'Some search query';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

    todoSearch.refs.searchField.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchField);

    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should call onSearch with proper checked value', () => {
    var searchText = '';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

    todoSearch.refs.searchField.value = searchText;
    todoSearch.refs.showCompleted.checked = true;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);

    expect(spy).toHaveBeenCalledWith(true, searchText);
  });
});
