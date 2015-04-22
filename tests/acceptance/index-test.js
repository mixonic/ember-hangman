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
    assert.ok(find(':contains(Play Hangman)').length, 'show play hangman');
    assert.equal(currentURL(), '/');
  });
});

test('visiting / and see the letter a', function(assert) {
  visit('/');

  andThen(function() {
    assert.ok(find('.hangman-letter:contains(a)').length, 'a letter is on the page');
  });
});
