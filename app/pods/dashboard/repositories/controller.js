import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['page'],

  page: 1,
  per_page: 1
});
