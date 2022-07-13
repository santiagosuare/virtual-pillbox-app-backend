import mongoose from "mongoose";
import connectDb from "../db/mongo.js";
import medicalInsuranceModel from "../models/medicalinsurance.model.js";

const { disconnect } = mongoose;
class MedicalInsurance {
  async connectDb() {
    return await connectDb();
  }

  async readAllMedicalInsurances() {
    try {
      await this.connectDb();
      const medicalInsurances = await medicalInsuranceModel.find();
      disconnect();
      return medicalInsurances;
    } catch (error) {
      disconnect();
      throw error;
    }
  }

  async createMedicalInsurance(medicalInsurance) {
    try {
      await this.connectDb();
      const newMedicalInsurance = await medicalInsuranceModel.create(
        medicalInsurance
      );
      disconnect();
      return newMedicalInsurance;
    } catch (error) {
      disconnect();
      throw error;
    }
  }
}

export default MedicalInsurance;
