import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('hangman-game', {
  integration: true
});

test('it renders letters', function(assert) {
  this.render();
  assert.equal($(".hangman-letter").length, 26, 'all the letters are rendered');
});
