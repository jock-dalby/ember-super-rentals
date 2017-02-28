import Ember from 'ember';

export default Ember.Route.extend({
  model() { // ES6 shorthand method definition syntax; Same as writing model: function()
    return this.get('store').findAll('rental');
  }
});
