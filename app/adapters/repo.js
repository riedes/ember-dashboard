import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  handleResponse(status, headers, payload) {
    return {
      repos: payload
    }
  }
});
