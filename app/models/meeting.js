import DS from 'ember-data';

var Meeting = DS.Model.extend({
    title: DS.attr('string'),
    duration: DS.attr('int'),
    attendees: DS.hasMany('attendee', {async: true})
});

Meeting.reopenClass({
    FIXTURES: [
        { id: 1, title: 'Mastery Lab - iOS', duration: '120', attendees: [1, 2, 3, 4, 5] },
        { id: 2, title: 'Mastery Lab - Ember', duration: '30', attendees: [6, 7] }
    ]
});

export default Meeting;