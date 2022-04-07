import { type } from "os";
import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { users, user } from "./users";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.get("/users", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    if (!users) {
      throw new Error("Usuários não encontrados.");
    }

    if (!req.query.name) {
      res.status(200).send(users);
    } else {
      const name: string = req.query.name as string;

      let findUser: user | undefined = users.find((item) => {
        return item.name.toLowerCase() === name?.toLowerCase();
      });

      if (!users) {
        throw new Error("Usuários não encontrados.");
      }
      if (!findUser) {
        throw new Error("Usuário não encontrado.");
      }
      res.status(200).send(findUser);
    }
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/users/:type", (req: Request, res: Response) => {
  let errorCode = 400;

  const type: string = req.params.type;

  let filteredUsers = users.filter((item) => {
    return item.type.toLowerCase() === type;
  });

  try {
    if (!users) {
      throw new Error("Usuários não encontrados.");
    }
    if (filteredUsers.length === 0) {
      throw new Error("O tipo inserido deve ser admin ou normal.");
    }
    res.status(200).send(filteredUsers);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

app.post("/users", (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const { id, name, email, type, age }: user = req.body;

    if (!id || !name || !email || !type || !age) {
      throw new Error("Insira todas as informações do usuário.");
    }

    const user: user = {
      id: id,
      name: name,
      email: email,
      type: type,
      age: age,
    };

    users.push(user);

    res.status(200).send(users);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});
