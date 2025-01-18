import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { title, body, writer } = req.body;

    const dataPath = path.join(process.cwd(), "data.json");
    const data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

    const newName = {
      id: data.names.length ? data.names[data.names.length - 1].id + 1 : 1,
      title,
      body,
      writer,
    };

    data.names.push(newName);
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

    return res.status(201).json(newName);
  }

  res.status(405).json({ error: "Method not allowed" });
}
