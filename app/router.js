import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('demo', function() {
        this.route('handlebars');
        this.route('web-components');
        this.route('data');
    });
});

export default Router;
