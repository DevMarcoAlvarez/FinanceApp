import { loadUsers, saveUsers } from "./Components/DataBase.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

import express from "express";
import "dotenv/config";

const __dirname = dirname(fileURLToPath(import.meta.url));
const users: User[] = await loadUsers();

const app = express();

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

  await saveUsers(users);
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
