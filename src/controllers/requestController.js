const Request = require("../models/Request");

class RequestController {
  addRequest(body) {
    const request = new Request(body);
    return request.save();
  }

  updateStatus(id, body) {
    return Request.findByIdAndUpdate(id, body);
  }

  deleteRequest(id) {
    return Request.findByIdAndDelete(id);
  }

  getClientRequests(id) {
    return Request.find({ client_id: id });
  }

  getFreelancerRequests(id) {
    return Request.find({ user_id: id });
  }
}

module.exports = RequestController;
