import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  ajax: service(),

  model(params) {
    return this.get('ajax').request('https://api.github.com/orgs/' + params.orgs_login);
  }
});
