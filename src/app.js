const express = require("express");
const app = express();
const { PostRoutes, LoginRoutes } = require("./routes");
const config = require("./config");

config();
app.use(express.json());

app.listen(process.env.PORT, () => {
  app.use("/posts", PostRoutes);
  app.use("/login", LoginRoutes);
});
