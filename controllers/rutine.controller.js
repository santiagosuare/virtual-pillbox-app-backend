import { info, error as _error, warn } from "../logs/logs.js";
import { sync, findAll } from "../models/rutine.model.js";

export async function createTable(req, res) {
  try {
    await sync();
    info(`RutineController: createTable: Table created`);
    res.send("ok");
  } catch (error) {
    _error(`RutineController: createTable: ${error}`);
    res.send(error);
  }
}
export async function readAllRutines(req, res) {
  try {
    const data = await findAll({});
    if (data.length > 0) {
      info(`RutineController: readAllRutines: ${data}`);
      res.status(200).json(data);
    } else {
      warn(`RutineController: readAllRutines: No data found`);
      res.status(404).json({ message: "No data found" });
    }
  } catch (error) {
    _error(`RutineController: readAllRutines: ${error}`);
    res.send(error);
  }
}
