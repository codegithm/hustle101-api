const router = require("express").Router();
const RequestController = require("../controllers/requestController");
const ctr = new RequestController();

router.post("/", (req, res) => {
  ctr
    .addRequest(req.body)
    .then((request) => {
      res.status(201).json({ message: "Success", data: request });
    })
    .catch((err) => {
      res.status(500).json({ message: "An error occurred", data: err });
    });
});

router.put("/:id", (req, res) => {
  ctr
    .updateStatus(req.params.id, req.body)
    .then((response) => {
      res.status(200).json({ message: "Success", data: response });
    })
    .catch((err) => {
      res.status(500).json({ message: "An error occurred", data: err });
    });
});

router.get("/clientRequests/:id", (req, res) => {
  ctr
    .getClientRequests(req.params.id)
    .then((requests) => {
      res.status(200).json({ message: "Success", data: requests });
    })
    .catch((e) => {
      res.status(500).json({ message: "An error occurred", data: e });
    });
});

router.get("/freelancerRequests/:id", (req, res) => {
  ctr
    .getFreelancerRequests(req.params.id)
    .then((requests) => {
      res.status(200).json({ message: "Success", data: requests });
    })
    .catch((e) => {
      res.status(500).json({ message: "An error occurred", data: e });
    });
});

module.exports = router;
