import { saveContactData } from "../../services/databaseFunctions";
import { getContactData } from "../../services/databaseFunctions";

export default (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    saveContactData(JSON.parse(data));
    res.status(200).json({ message: "I'll reach you ASAP!" });
  } else {
    console.log(getContactData());
  }
};
