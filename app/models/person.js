import DS from 'ember-data';

var Person = DS.Model.extend({
    name: DS.attr('string'),
    wagePerHour: DS.attr('number'),
    attendees: DS.hasMany('attendee', {async: true})
});

Person.reopenClass({
    FIXTURES: [
        { id: 1, name: 'The Mighty Chewbacca', wagePerHour: '225.00', attendees: [1] },
        { id: 2, name: 'Han Solo', wagePerHour: '115.00', attendees: [2] },
        { id: 3, name: 'Master Yoda', wagePerHour: '500.00', attendees: [3] },
        { id: 4, name: 'Luke Skywalker', wagePerHour: '50.00', attendees: [4, 6] },
        { id: 5, name: 'Leia Organa', wagePerHour: '750.00', attendees: [5, 7] }
    ]
});

export default Person;