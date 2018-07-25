import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  ajax: service(),

  model() {
    let parentModel = this.modelFor('dashboard.users.orgs');

    return this.get('ajax').request('https://api.github.com/users/' + parentModel.get('login') + '/orgs');
  }
});
