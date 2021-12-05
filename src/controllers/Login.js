const loginService = require("../services/Login");
const login = (req, res) => {
  loginService
    .login(req.body)
    .then((token) => {
      res.status(200).send(token);
    })
    .catch(() => {
      res.status(401).send({
        message: "User and password combination is not found.",
      });
    });
};

module.exports = {
  login,
};
