import DS from 'ember-data';

export default DS.Model.extend({
  login:         DS.attr('string'),
  repos_url:     DS.attr('string'),
  followers_url: DS.attr('string'),
  following_url: DS.attr('string'),
  starred_url:   DS.attr('string')
});
