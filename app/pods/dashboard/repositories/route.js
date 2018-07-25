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
    return this.store.query('repository', {
      page: {
        // number: params.page,
        per_page: params.per_page
      }
    });
  }
});
