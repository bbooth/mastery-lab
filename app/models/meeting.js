import DS from 'ember-data';

var Meeting = DS.Model.extend({
    title: DS.attr('string'),
    duration: DS.attr('string')
});

Meeting.reopenClass({
    FIXTURES: [
        { id: 1, title: 'Mastery Lab - iOS', duration: '2h' },
        { id: 2, title: 'Mastery Lab - Ember', duration: '30m' }
    ]
});

export default Meeting;