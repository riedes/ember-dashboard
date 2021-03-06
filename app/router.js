import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard', function() {
    this.route('repositories', function() { });
    this.route('users', function() {
      this.route('show', { path: ':user_login' });
      this.route('repos', { path: ':user_login/repos'}, function() { });
      this.route('followers', { path: ':user_login/followers'}, function() { });
      this.route('orgs', { path: ':user_login/orgs'}, function() { });
    });
    this.route('organizations', function() {
      this.route('show', { path: ':orgs_login' });
    });
  });
});

export default Router;
