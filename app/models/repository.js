import DS from 'ember-data';

export default DS.Model.extend({
  name:      DS.attr('string'),
  full_name: DS.attr('string'),
  url:       DS.attr('string')
});
