import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('meetings', function() { });
  this.resource('people', function() { });
});

export default Router;
