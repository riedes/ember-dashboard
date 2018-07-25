import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  handleResponse(status, headers, payload, requestData) {
    return {
      followers: payload
    }
  }
});
