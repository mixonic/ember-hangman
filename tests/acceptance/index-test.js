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

test('visiting / enter a word', function(assert) {
  visit('/');
  fillIn('input[name=word]', 'bob');
  keyEvent('input[name=word]', 'keyup', 13);
  andThen(function() {
    assert.ok(find(':contains(guess this one)').length, 'shows guess message');
  });
});

test('visiting / enter a word and win', function(assert) {
  visit('/');
  fillIn('input[name=word]', 'bob');
  keyEvent('input[name=word]', 'keyup', 13);
  click('.hangman-letter:contains(b)');
  click('.hangman-letter:contains(o)');
  andThen(function() {
    assert.ok(find(':contains(you won)').length, 'shows winning message');
  });
});

test('visiting / enter a word and lost', function(assert) {
  visit('/');
  fillIn('input[name=word]', 'bob');
  keyEvent('input[name=word]', 'keyup', 13);
  click('.hangman-letter:contains(r)');
  click('.hangman-letter:contains(s)');
  click('.hangman-letter:contains(t)');
  click('.hangman-letter:contains(u)');
  click('.hangman-letter:contains(v)');
  click('.hangman-letter:contains(q)');
  click('.hangman-letter:contains(x)');
  click('.hangman-letter:contains(y)');
  andThen(function() {
    assert.ok(find(':contains(try again)').length, 'shows losing message');
  });
});
