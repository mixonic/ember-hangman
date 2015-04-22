import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  game: null,
  letter: null,

  isGuessed: false,

  init() {
    this._super.apply(this, arguments);
    var game = this.get('game');
    game.on('didGuessLetter', (l) => {
      if (l === this.get('letter')) {
        this.set('isGuessed', true);
      }
    });
    game.on('didReset', this, this.reset);
  },

  reset() {
    this.set('isGuessed', false);
  },
});
