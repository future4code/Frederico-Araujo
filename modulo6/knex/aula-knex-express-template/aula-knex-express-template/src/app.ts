import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:3003`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.get("/", async (req: Request, res: Response) => {
  try {
    const actors = await connection("Actor");

    if (req.query.name) {
      const actor = actors.find((item) => {
        return item.name.includes(req.query.name);
      });
      res.status(200).send(actor);
    } else if (req.query.gender) {
      const actor = actors.filter((item) => {
        return item.gender === req.query.gender;
      });
      res.status(200).send(`${actor.length}`);
    } else {
      res.status(200).send(actors);
    }

    if (!actors) {
      throw new Error("Arquivo inválido.");
    }
  } catch (error) {}
});

app.post("/:id", async (req: Request, res: Response) => {
  try {
    const actors = await connection("Actor")
      .update({
        salary: req.body.salary,
      })
      .where({ id: req.params.id });

    res.status(200).send("Alterado com sucesso.");
  } catch (error) {}
});
export default app;
