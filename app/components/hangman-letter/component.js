import Ember from 'ember';

// Usage:
//
//  {{hangman-letter letter=letter game=game}}
//
export default Ember.Component.extend({
  game: null,
  letter: null,

  isMissed: false,
  isGuessed: false,

  init() {
    this._super.apply(this, arguments);
    var game = this.get('game');
    game.on('didGuessLetter', (l) => {
      if (l === this.get('letter')) {
        this.set('isGuessed', true);
      }
    });
    game.on('didMissLetter', (l) => {
      if (l === this.get('letter')) {
        this.set('isMissed', true);
      }
    });
    game.on('didReset', this, this.reset);
  },

  reset() {
    this.set('isMissed', false);
    this.set('isGuessed', false);
  },

  click() {
    if (!(this.get('isMissed') || this.get('isGuessed'))) {
      this.get('game').playLetter(this.get('letter'));
    }
  }

});
