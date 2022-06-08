const express = require("express");
const app = express();
const log4js = require("./logs/logs.js");
const router = require("./routes/mainRouter.js");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//CONECCION AL PUERTO
const connectServer = app.listen(process.env.PORT || 3000, () => {
  log4js.info(`Server started at port ${process.env.PORT}`);
});

connectServer.on("error", (err) => {
  log4js.error(err);
});

//ROUTES
app.use("/api", router);
