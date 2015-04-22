import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from "ember";

moduleForComponent('hangman-graphic', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject({
    game: Ember.Object.extend(Ember.Evented)
  });
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
