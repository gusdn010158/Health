import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "PUT") {
    const { id, title, body, writer } = req.body;

    const dataPath = path.join(process.cwd(), "data.json");
    const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

    const index = data.names.findIndex((name) => name.id === parseInt(id, 10));
    if (index === -1) {
      return res.status(404).json({ error: "Item not found" });
    }

    data.names[index] = { id: parseInt(id, 10), title, body, writer };
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

    return res.status(200).json(data.names[index]);
  }

  res.status(405).json({ error: "Method not allowed" });
}
