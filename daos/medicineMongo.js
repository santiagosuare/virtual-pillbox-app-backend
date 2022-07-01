const mongoose = require("mongoose");
const connectDb = require("../db/mongo");
const medicineModel = require("../models/medicine.model");

class Medicine {
  async connectDb() {
    return await connectDb();
  }

  async createMedicine(medicine) {
    try {
      await this.connectDb();
      const newMedicine = await medicineModel.create(medicine);
      mongoose.disconnect();
      return newMedicine;
    } catch (error) {
      mongoose.disconnect();
      throw error;
    }
  }

  async readAllMedicines() {
    try {
      await this.connectDb();
      const medicines = await medicineModel.find();
      mongoose.disconnect();
      return medicines;
    } catch (error) {
      mongoose.disconnect();
      throw error;
    }
  }
}

module.exports = Medicine;
