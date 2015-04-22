import Ember from 'ember';

const WAITING = () => {};
const PLAYING = () => {};
const WON = () => {};
const LOST = () => {};

export default Ember.Service.extend(Ember.Evented, {

  init() {
    this._state = WAITING;
    this.reset();
  },

  playLetter(rawLetter) {
    var letter = rawLetter.toLowerCase();

    var guessedLetter = Ember.keys(this._guessedLetterMap).find((l) => {
      return l === letter;
    });

    if (guessedLetter) {
      this._guessedLetterMap[guessedLetter] = true;
      this.trigger('didGuessLetter', guessedLetter);
    } else {
      this._missedLetters.push(letter);
      this.trigger('didMissLetter', letter);
    }

    this.updateGame();
  },

  playWord(word) {
    this._state = PLAYING;
    this.reset();
    this._word = word.toLowerCase();
    Ember.A(this._word.toLowerCase().split('')).uniq().forEach((l) => {
      this._guessedLetterMap[l] = false;
    });
  },

  reset() {
    this._guessedLetterMap = {};
    this._missedLetters = [];
    this.trigger('didReset');
  },

  updateGame() {
    if (this._state !== PLAYING) {
      return;
    }

    if (this.isWordMissed()) {
      this._state = LOST;
      this.trigger('didLoseGame');
    } else if (this.isWordGuessed()) {
      this._state = WON;
      this.trigger('didWinGame');
    }
  },

  isWordMissed() {
    return this._missedLetters.length > 6;
  },

  isWordGuessed() {
    return Ember.keys(this._guessedLetterMap).every((l) => {
      return this._guessedLetterMap[l];
    });
  },

  updateGameFlags: Ember.on('didReset', 'didLoseGame', 'didWinGame', function(){
    var state = {
      isPlaying: false,
      isWinning: false,
      isLosing: false,
      isWaiting: false
    };
    switch (this._state) {
      case WAITING:
        state.isWaiting = true;
        break;
      case PLAYING:
        state.isPlaying = true;
        break;
      case WON:
        state.isWinning = true;
        break;
      case LOST:
        state.isLosing = true;
        break;
    }
    this.setProperties(state);
  })

});
