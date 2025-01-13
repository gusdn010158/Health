let names = []; // 메모리에서 데이터를 관리 (예제용)

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ names });
  } else if (req.method === "POST") {
    const { title, body, writer } = req.body;
    const newEntry = {
      id: Date.now().toString(),
      title,
      body,
      writer,
    };

    names.push(newEntry);
    res.status(201).json(newEntry);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
