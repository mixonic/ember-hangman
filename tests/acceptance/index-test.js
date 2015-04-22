import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'playhangman/tests/helpers/start-app';

var application;

module('Acceptance: Index', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.ok($("h1:contains(Play Hangman)").length, 'title is on the page');
  });
});
