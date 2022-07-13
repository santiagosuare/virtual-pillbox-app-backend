import * as Daos from "../daos/mainMongo.js";
const Medicine = new Daos.medicineDaos();
import log4js from "../logs/logs.js";

export async function readAllMedicines(req, res) {
  try {
    const medicines = await Medicine.readAllMedicines();
    log4js.info(`Medicines: ${JSON.stringify(medicines)}`);
    res.status(200).send({
      status: 200,
      message: "Successfully read all medicines",
      data: medicines,
    });
  } catch (error) {
    log4js.error(`MedicineController: readAllMedicines: ${error}`);
    res.status(500).send({
      status: 500,
      message: "Error reading all medicines",
      data: error,
    });
  }
}
export async function createMedicine(req, res) {
  try {
    const newMedicine = await Medicine.createMedicine(req.body);
    log4js.info(`Medicine Create: ${JSON.stringify(newMedicine)}`);
    res.status(201).send({
      status: 201,
      message: "Successfully created medicine",
      data: newMedicine,
    });
  } catch (error) {
    log4js.error(`MedicineController: createMedicine: ${error}`);
    res.status(500).send({
      status: 500,
      message: "Error creating medicine",
      data: error,
    });
  }
}
