import express, { urlencoded, json } from "express";
import cors from "cors";
const app = express();
import logger from "./logs/logs.js";
import router from "./routes/mainRouter.js";
import 'dotenv/config'

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

const PORT = process.env.PORT || 8080;
//CONECCION AL PUERTO
const connectServer = app.listen(PORT, () => {
    logger.info(`Server started on port ${PORT}`);
});

connectServer.on("error", (err) => {
    logger.error(err);
});

//ROUTES
app.use("/api", router);
