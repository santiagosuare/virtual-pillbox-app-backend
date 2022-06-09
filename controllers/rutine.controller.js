const log4js = require("../logs/logs");
const RutineModel = require("../models/rutine.model");

module.exports = {
  createTable: async (req, res) => {
    try {
      await RutineModel.sync();
      log4js.info(`RutineController: createTable: Table created`);
      res.send("ok");
    } catch (error) {
      log4js.error(`RutineController: createTable: ${error}`);
      res.send(error);
    }
  },
  // READ All Rutine
  readAllRutines: async (req, res) => {
    try {
      const data = await RutineModel.findAll({});
      if (data.length > 0) {
        log4js.info(`RutineController: readAllRutines: ${data}`);
        res.status(200).json(data);
      } else {
        log4js.warn(`RutineController: readAllRutines: No data found`);
        res.status(404).json({ message: "No data found" });
      }
    } catch (error) {
      log4js.error(`RutineController: readAllRutines: ${error}`);
      res.send(error);
    }
  },
};
