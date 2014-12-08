import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
        createMeeting: function() {
            var title = this.get('newTitle');
            if(!title.trim()) { return; }

            // Create the new Meeting model
            var meeting = this.store.createRecord('meeting', {
                title: title,
                duration: '1h'
            });

            // Clear the "New Meeting" text field
            this.set('newTitle', '');

            // Save the new model
            meeting.save();
        }
    }
});