import { readFile, writeFile, mkdir } from "fs/promises";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

/* Ubicacion del archivo actual. */
const __dirname = dirname(fileURLToPath(import.meta.url));
/* Ubicacion de la base de datos */
const DBDir = join(__dirname, "../../DataBase/user.json");

export async function loadUsers(): Promise<Record<string, User>> {
  try {
    await mkdir(dirname(DBDir));
  } catch {}

  try {
    console.log("Cargando base de datos");

    return JSON.parse(
      await readFile(DBDir, {
        encoding: "utf-8",
      })
    );
  } catch {
    console.log("Creando base de datos");

    await writeFile(DBDir, "{}", {
      encoding: "utf-8",
    });

    return {};
  }
}

export async function saveUsers(): Promise<void> {
  try {
    console.log("Usuario Agregado correctamente.");

    await writeFile(DBDir, JSON.stringify(users), {
      encoding: "utf-8",
    });
  } catch {}
}

const users = await loadUsers();

export default users;
