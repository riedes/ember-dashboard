import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard', function() {
    this.route('repositories');
    this.route('users', function() {
      this.route('show', { path: ':user_login' });
      this.route('repos', { path: ':user_login/repos'}, function() { });
      this.route('followers', { path: ':user_login/followers'}, function() { });
    });
  });
});

export default Router;
