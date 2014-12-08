import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            meetings: this.store.find('meeting'),
            people: this.store.find('person')
        });
    }
});