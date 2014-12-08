import Ember from 'ember';

export default Ember.ObjectController.extend({
    actions: {
        editMeeting: function() {
            this.set('isEditing', true);
        },
        cancelEdit: function() {
            var meeting = this.get('model');
            meeting.rollback();

            this.set('isEditing', false);
        },
        save: function() {
            this.set('isEditing', false);
            this.get('model').save();
        }
    },
    isEditing: false
});
