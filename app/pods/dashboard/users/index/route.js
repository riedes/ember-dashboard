import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    per_page: {
      refreshModel: true
    }
  },
  model(params) {
    return this.store.query('user', {
      page: params.page,
      per_page: params.per_page
    });
  }
});
