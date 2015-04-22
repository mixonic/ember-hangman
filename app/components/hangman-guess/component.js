import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  isGuessed: false,
  game: Ember.inject.service(),

  init() {
    this._super.apply(this, arguments);
    var game = this.get('game');
    game.on('didReset', this, this.reset);
    game.on('didGuessLetter', (l) => {
      if (l === this.get('letter')) {
        this.set('isGuessed', true);
      }
    });
  },

  reset() {
    this.set('isGuessed', false);
  }
});
