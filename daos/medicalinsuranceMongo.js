const mongoose = require("mongoose");
const connectDb = require("../db/mongo");
const medicalInsuranceModel = require("../models/medicalinsurance.model");

class MedicalInsurance {
  async connectDb() {
    return await connectDb();
  }

  async readAllMedicalInsurances() {
    try {
      await this.connectDb();
      const medicalInsurances = await medicalInsuranceModel.find();
      mongoose.disconnect();
      return medicalInsurances;
    } catch (error) {
      mongoose.disconnect();
      throw error;
    }
  }

  async createMedicalInsurance(medicalInsurance) {
    try {
      await this.connectDb();
      const newMedicalInsurance = await medicalInsuranceModel.create(
        medicalInsurance
      );
      mongoose.disconnect();
      return newMedicalInsurance;
    } catch (error) {
      mongoose.disconnect();
      throw error;
    }
  }
}

module.exports = MedicalInsurance;
