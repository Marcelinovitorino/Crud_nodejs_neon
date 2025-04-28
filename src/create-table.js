import { sql } from "./db.js";  // Atenção no ".js"!

sql`
CREATE TABLE videos (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  duration INTEGER
)
`
.then(() => {
  console.log("Tabela criada com sucesso!");
})
.catch((error) => {
  console.error("Erro ao criar a tabela:", error);
});
