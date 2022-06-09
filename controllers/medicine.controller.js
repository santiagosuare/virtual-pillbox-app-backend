const Medicine = require("../models/medicine.model");
const log4js = require("../logs/logs");

module.exports = {
  CreateTable: async (req, res) => {
    try {
      await Medicine.sync();
      log4js.info(`MedicineController: CreateTable: Table created`);
      res.send("ok");
    } catch (error) {
      log4js.error(`MedicineController: CreateTable: ${error}`);
      res.send(error);
    }
  },

  readAllMedicines: async (req, res) => {
    try {
      const data = await Medicine.findAll({});
      if (data.length > 0) {
        log4js.info(`MedicineController: readAllMedicines: ${data}`);
        res.status(200).json(data);
      } else {
        log4js.warn(`MedicineController: readAllMedicines: No data found`);
        res.status(404).json({ message: "No data found" });
      }
    } catch (error) {
      log4js.error(`MedicineController: readAllMedicines: ${error}`);
      res.send(error);
    }
  },

  readMedicine: async (req, res) => {
    const id = req.params.id;
    const medicine = await Medicine.findByPk(id);
    if (medicine) {
      log4js.info(`MedicineController: readMedicine: ${medicine}`);
      res.status(200).json(medicine);
    } else {
      log4js.warn(`MedicineController: readMedicine: No data found`);
      res.status(404).json({ message: "No data found" });
    }
  },
};
