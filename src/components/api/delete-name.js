import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.query;

    const dataPath = path.join(process.cwd(), "data.json");
    const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

    const updatedNames = data.names.filter(
      (name) => name.id !== parseInt(id, 10)
    );
    if (updatedNames.length === data.names.length) {
      return res.status(404).json({ error: "Item not found" });
    }

    data.names = updatedNames;
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

    return res.status(200).json({ success: true });
  }

  res.status(405).json({ error: "Method not allowed" });
}
