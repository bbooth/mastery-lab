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