const router = require("express").Router();
const UserController = require("../controllers/userController");
const ClientController = require("../controllers/clientController");
const client = new ClientController();
const ctr = new UserController();

router.post("/register", (req, res) => {
  ctr
    .getUserByEmail(req.body.email)
    .then((user) => {
      if (user) {
        res.status(409).json({ message: "User already exists", data: null });
      } else {
        ctr
          .addUser(req.body)
          .then((user) => {
            res.status(201).json(user);
          })
          .catch((err) => {
            res.status(500).json(err);
          });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "An error occurred", data: err });
    });
});

router.post("/search", (req, res) => {
  console.log(req.body);
  const { profession } = req.body;
  ctr
    .getUserByProfession(profession)
    .then((user) => {
      res.status(200).json({ message: "Success", data: user });
    })
    .catch((e) => {
      res.status(500).json({ message: "An error occured", data: e });
    });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  ctr
    .login(email, password)
    .then((user) => {
      if (user) {
        res.status(200).json({ message: "Success", data: user });
      } else {
        res.status(404).json({ message: "Incorrect credentials", data: null });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "An error occurred", data: err });
    });
});

module.exports = router;
