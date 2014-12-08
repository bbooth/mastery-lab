import DS from 'ember-data';

var Meeting = DS.Model.extend({
    title: DS.attr('string'),
    duration: DS.attr('string'),
    attendees: DS.hasMany('person', {async: true})
});

Meeting.reopenClass({
    FIXTURES: [
        { id: 1, title: 'Mastery Lab - iOS', duration: '2h', attendees: [1, 2, 3, 4, 5] },
        { id: 2, title: 'Mastery Lab - Ember', duration: '30m', attendees: [4, 5] }
    ]
});

export default Meeting;