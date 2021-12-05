const jwt = require("jsonwebtoken");
const { users } = require("../../fake-db/users");

const login = (credentials) => {
  return new Promise((resolve, reject) => {
    if (checkLogin(credentials))
      resolve(jwt.sign(credentials, process.env.JWT_SECRET));
    else reject();
  });
};

const checkLogin = (credentials) => {
  const user = users.find((us) => us.name === credentials.name);
  if (user) return credentials.password === user.password;
  return false;
};

module.exports = { login };
