import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let parentModel = this.modelFor('dashboard.users.followers');

    // return this.store.query('repo', 'mojombo');
    return this.store.query('follower', {
      filter: {
        'username': parentModel.get('login')
      }
    })
  }
});
