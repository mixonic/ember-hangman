import Ember from "ember";

export default Ember.Controller.extend({

  letters: Ember.computed(function(){
    return 'abcdefghijklmnopqrstuvwxyz'.split('');
  })

});
