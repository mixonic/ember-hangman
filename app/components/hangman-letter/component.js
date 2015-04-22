import Ember from 'ember';

export default Ember.Component.extend({

  game: Ember.inject.service(),

  click() {
    this.get('game').playLetter(this.get('letter'));
  }
});
