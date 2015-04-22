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

test('enters a word and guesses a letter', function(assert) {
  visit('/');

  fillIn('input[name=word]', 'bob');
  keyEvent('input[name=word]', 'keyup', 13);

  click('.hangman-letter:contains(a)');

  andThen(function() {
    let element = find('.hangman-letter:contains(a)');
    assert.ok(element.is('.missed'), 'element missed');
  });

  click('.hangman-letter:contains(b)');

  andThen(function() {
    let element = find('.hangman-letter:contains(b)');
    assert.ok(element.is('.guessed'), 'element guessed');
  });
});
