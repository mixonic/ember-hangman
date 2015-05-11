import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  game: null,
  letter: null,

  isGuessed: Ember.computed('game.guessedLetters', function() {
    return this.get('game.guessedLetters').indexOf(this.get('letter')) !== -1;
  })

});
