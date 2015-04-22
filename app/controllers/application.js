import Ember from "ember";

export default Ember.Controller.extend({

  game: Ember.inject.service('game'),

  newWord: null,

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
