import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from "ember";

moduleForComponent('hangman-letter', {
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject({
    letter: 'a',
    game: Ember.Object.extend(Ember.Evented)
  });
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
