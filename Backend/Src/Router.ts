import Users, { saveUsers } from "./Components/DataBase.js";
import { getRandomId } from "./Components/Uuid.js";
import Express from "express";

export namespace Routes {
  export function AppendUser(request: Express.Request<User>, response: Express.Response) {
    const id = getRandomId(16);

    Users[id] = {
      ...request.params,
      id,
    };

    response.redirect("/");
  }

  export function DeleteUser(request: Express.Request, response: Express.Response) {}

  export function UpdateUser(request: Express.Request, response: Express.Response) {}

  export function SelectUser(request: Express.Request, response: Express.Response) {
    response.send(Utils.FindUserById(request.params.id));
  }
}

namespace Utils {
  export function FindUserById(id: string) {
    if (!(id in Users)) throw new Error("Quien sos?");

    return Users[id];
  }
}
