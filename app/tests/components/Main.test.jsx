var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery'); // from webpack.ProvidePlugin in webpack.config.js
var TestUtils = require('react-addons-test-utils');

var Main = require('Main');

describe('Main', () => {
  it('should exist', () => {
    expect(Main).toExist();
  });
});
