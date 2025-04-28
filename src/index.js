import express from "express";
import { DatabasePostgress } from "./database_postgress.js";
import { sql } from "./db.js";

const app = express();
const database = new DatabasePostgress();

app.use(express.json());

// Listar vídeos
app.get("/videos", async (req, res) => {
  const search = req.query.search;

  const videos = await database.list(search);
  return res.json(videos);
});

// Criar vídeo
app.post("/videos", async (req, res) => {
  const { title, description, duration } = req.body;
  await database.create({
    title,
    description,
    duration,
  });

  res.status(200).json({ message: "Vidio criado com sucesso!" });
});

// Atualizar vídeo
app.put("/videos/:id", async (req, res) => {
  const id = req.params.id;
  const { title, description, duration } = req.body;

  await database.update(id, {
    title,
    description,
    duration,
  });
  res.status(204).json([]);
});

// Deletar vídeo
app.delete("/videos/:id", async (req, res) => {
  const id = req.params.id;
  await database.delete(id);
  return res.status(204).json([]);
});

const PORT = process.env.PORT ?? 6000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
