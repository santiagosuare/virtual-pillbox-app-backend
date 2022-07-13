import mongoose from "mongoose";
import connectDb from "../db/mongo.js";
import medicineModel from "../models/medicine.model.js";

const { disconnect } = mongoose;
class Medicine {
  async connectDb() {
    return await connectDb();
  }

  async createMedicine(medicine) {
    try {
      await this.connectDb();
      const newMedicine = await medicineModel.create(medicine);
      disconnect();
      return newMedicine;
    } catch (error) {
      disconnect();
      throw error;
    }
  }

  async readAllMedicines() {
    try {
      await this.connectDb();
      const medicines = await medicineModel.find();
      disconnect();
      return medicines;
    } catch (error) {
      disconnect();
      throw error;
    }
  }
}

export default Medicine;
