import Ember from 'ember';

// Usage:
//
//  {{hangman-letter letter=letter game=game}}
//
export default Ember.Component.extend({
  game: null,
  letter: null,

  isMissed: Ember.computed('game.missedLetters', function(){
    return this.get('game.missedLetters').indexOf(this.get('letter')) !== -1;
  }),
  isGuessed: Ember.computed('game.guessedLetters', function(){
    return this.get('game.guessedLetters').indexOf(this.get('letter')) !== -1;
  }),

  click() {
    if (!(this.get('isMissed') || this.get('isGuessed'))) {
      this.get('game').playLetter(this.get('letter'));
    }
  }

});
