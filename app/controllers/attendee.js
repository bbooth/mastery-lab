import Ember from 'ember';

export default Ember.ObjectController.extend({
    needs: 'meeting',
    meeting: Ember.computed.alias("controllers.meeting"),
    actions: {
        deleteAttendee: function() {
            var attendee = this.get('model');
            attendee.deleteRecord();
            this.get('meeting').deletedAttendees.pushObject(attendee);
        }
    }
});