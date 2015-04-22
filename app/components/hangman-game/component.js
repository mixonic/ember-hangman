import Ember from 'ember';

export default Ember.Component.extend({
  newWord: '',
  game: Ember.inject.service(),
  letters: Ember.computed(function(){
    return 'abcdefghijklmnopqrstuvwxyz'.split('');
  }),

  actions: {
    playWord() {
      var word = this.get('newWord');
      this.get('game').playWord(word);
      this.set('wordLetters', word.split(''));
      this.set('newWord', '');
    }
  }
});
