import express from "express";
import "dotenv/config";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.route("/").get((request, response) => {
  response.send("Hello World").status(200).end();
});

app.route("/user/:id").get((request, response) => {
  response.send(request.params.id).status(200).end();
});

app.listen(8080, () => {
  console.log("listening...");
});
