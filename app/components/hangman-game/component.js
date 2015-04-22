import Ember from 'ember';

export default Ember.Component.extend({
  newWord: '',
  game: Ember.inject.service(),
  letters: Ember.computed(function(){
    return 'abcdefghijklmnopqrstuvwxyz'.split('');
  }),

  actions: {
    playWord() {
      this.get('game').playWord(this.get('newWord'));
      this.set('newWord', '');
    }
  }
});
