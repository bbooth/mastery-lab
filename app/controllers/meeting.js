import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
        editMeeting: function() {
            this.set('isEditing', true);
        },
        cancelEdit: function() {
            var meeting = this.get('model');
            meeting.rollback();

            this.get('deletedAttendees').forEach(function(attendee) {
                attendee.rollback();
            });

            this.set('isEditing', false);
        },
        addAttendee: function() {
            console.log('add');
            var person = this.get('selectedPerson');
            var meeting = this.get('model');

            if(!person || !meeting) { return; }

            // Create the new Attendee model
            var attendee = this.store.createRecord('attendee', {
                person: person,
                meeting: meeting
            });

            // Save the new model
            attendee.save();
        },
        save: function() {
            this.set('isEditing', false);

            this.get('deletedAttendees').forEach(function(attendee) {
                attendee.save();
            });

            this.get('model').save();
        }
    },
    deletedAttendees: Ember.A(),
    isEditing: false
});