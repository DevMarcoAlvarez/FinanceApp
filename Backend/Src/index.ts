import { readFile, writeFile, mkdir } from "fs/promises";

import { dirname, join } from "path";
import { fileURLToPath } from "url";

import express from "express";
import "dotenv/config";

const __dirname = dirname(fileURLToPath(import.meta.url));
const users: User[] = [];

const app = express();

//Crea la instancia del usuario
try {
  await mkdir(join(__dirname, "../DataBase"));
} catch {
  try {
    const data = JSON.parse(await readFile(join(__dirname, "../DataBase/user.json"), { encoding: "utf-8" }));

    if (data instanceof Array) {
      users.push(...data);
    }
  } catch {
    await writeFile(join(__dirname, "../DataBase/user.json"), "[]");
  }
}
//Crea la instancia del usuario

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.route("/users").get((_, response) => {
  response.send(users);
});

app.route("/users/:name").get((request, response) => {
  response.send(users.find((user) => user.name === request.params.name));
});

//Toma los datos del formulartio
app.route("/form").post(async (request, response) => {
  console.log((request.body as Record<"name", string>).name);

  response.send((request.body as Record<"name", string>).name).status(200);

  users.push({
    name: (request.body as Record<"name", string>).name,
  });

  await writeFile(join(__dirname, "../DataBase/user.json"), JSON.stringify(users, null, 2));
});
//Toma los datos del formulartio
app.use("/", express.static(join(__dirname, "../../Frontend/Dist")));

let u: User = { name: "u" };

const name = "";

/*
{
  let { name } = u;

  let [user1, user2] = [1, 2, 3, "x"];

  name = "Marquito🥺";
  console.log(name);
}
*/
app.listen(process.env.PORT, () => {
  console.log("Escuchando...");
});
