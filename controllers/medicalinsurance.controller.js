import * as Daos from "../daos/mainMongo.js";
const MedicalInsurance = new Daos.medicalInsuranceDaos();
import log4js from "../logs/logs.js";

export async function readAllMedicalInsurances(req, res) {
  try {
    const medicalInsurances = await MedicalInsurance.readAllMedicalInsurances();
    log4js.info(`MedicalInsurances: ${JSON.stringify(medicalInsurances)}`);
    res.status(200).send({
      status: 200,
      message: "Successfully read all medicalInsurances",
      data: medicalInsurances,
    });
  } catch (error) {
    log4js.error(
      `MedicalInsuranceController: readAllMedicalInsurances: ${error}`
    );
    res.status(500).send({
      status: 500,
      message: "Error reading all medicalInsurances",
      data: error,
    });
  }
}
export async function createMedicalInsurance(req, res) {
  try {
    const newMedicalInsurance = await MedicalInsurance.createMedicalInsurance(
      req.body
    );
    log4js.info(
      `MedicalInsurance Create: ${JSON.stringify(newMedicalInsurance)}`
    );
    res.status(201).send({
      status: 201,
      message: "Successfully created medicalInsurance",
      data: newMedicalInsurance,
    });
  } catch (error) {
    log4js.error(
      `MedicalInsuranceController: createMedicalInsurance: ${error}`
    );
    res.status(500).send({
      status: 500,
      message: "Error creating medicalInsurance",
      data: error,
    });
  }
}
