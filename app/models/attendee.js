import DS from 'ember-data';

var Attendee = DS.Model.extend({
    meeting: DS.belongsTo('meeting', {async: true}),
    person: DS.belongsTo('person', {async: true})
});

Attendee.reopenClass({
    FIXTURES: [
        { id: 1, meeting: 1, person: 1 },
        { id: 2, meeting: 1, person: 2 },
        { id: 3, meeting: 1, person: 3 },
        { id: 4, meeting: 1, person: 4 },
        { id: 5, meeting: 1, person: 5 },
        { id: 6, meeting: 2, person: 4 },
        { id: 7, meeting: 2, person: 5 },
    ]
});

export default Attendee;