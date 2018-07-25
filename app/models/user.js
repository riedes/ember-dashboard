import DS from 'ember-data';

export default DS.Model.extend({
  followers_url:     DS.attr('string'),
  following_url:     DS.attr('string'),
  login:             DS.attr('string'),
  avatar_url:        DS.attr('string'),
  repos_url:         DS.attr('string'),
  starred_url:       DS.attr('string'),
  subscriptions_url: DS.attr('string'),
  organizations_url: DS.attr('string'),
  name:              DS.attr('string'),
  followers:         DS.attr('number'),
  following:         DS.attr('number'),
  blog:              DS.attr('string'),
  email:             DS.attr('string'),
  bio:               DS.attr('string')
});
