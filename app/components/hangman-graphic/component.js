import Ember from 'ember';

let resetProperties = {
  isShowingHead: false,
  isShowingBody: false,
  isShowingLeftArm: false,
  isShowingRightArm: false,
  isShowingLeftLeg: false,
  isShowingRightLeg: false
};

export default Ember.Component.extend({
  game: Ember.inject.service(),

  init() {
    this._super.apply(this, arguments);
    this.reset();
    this.updateGraphic();

    var game = this.get('game');
    game.on('didMissLetter', () => {
      this.incrementProperty('missedLetterCount');
      this.updateGraphic();
    });
  },

  reset() {
    this.setProperties(resetProperties);
    this.set('missedLetterCount', 0);
  },

  updateGraphic() {
    switch (this.get('missedLetterCount')) {
      case 1:
        this.set('isShowingHead', true);
        break;
      case 2:
        this.set('isShowingBody', true);
        break;
      case 3:
        this.set('isShowingLeftArm', true);
        break;
      case 4:
        this.set('isShowingRightArm', true);
        break;
      case 5:
        this.set('isShowingLeftLeg', true);
        break;
      case 6:
        this.set('isShowingRightLeg', true);
        break;
    }
  }
});
