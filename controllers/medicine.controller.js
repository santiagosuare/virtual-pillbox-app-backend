const Medicine = require("../models/medicine.model");

module.exports = {
  CreateTable: async (req, res) => {
    try {
      await Medicine.sync();
      res.send("ok");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
};
