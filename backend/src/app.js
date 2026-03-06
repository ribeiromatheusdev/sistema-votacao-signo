import express from "express";

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ status: 200, mensagem: "Funcionando" });
});

export default app;
