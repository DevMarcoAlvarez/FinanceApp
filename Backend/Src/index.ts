import { loadUsers, saveUsers } from "./Components/DataBase.js";
import { getRandomId } from "./Components/Uuid.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import express from "express";
import "dotenv/config";

import { Routes } from "./Router.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const users = await loadUsers();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//carga archivos estaticos
app.use("/", express.static(join(__dirname, "../../Frontend/Dist")));

app.get("/user/:id", Routes.SelectUser);

app.post("/form", Routes.AppendUser);

app.listen(process.env.PORT, () => {
  console.log("Escuchando...");
});
