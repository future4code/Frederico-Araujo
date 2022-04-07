import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { users, transactions, user } from "./data";

const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao iniciar servidor.`);
  }
});

app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    if (!users) {
      errorCode = 404;
      throw new Error("Nenhum usuário encontrado");
    }

    res.status(200).send(users);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

app.post("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const { name, cpf, birthDate } = req.body;

    if (!name || !cpf || !birthDate) {
      throw new Error("Insira todas as informações");
    }

    let date: string = new Date().toLocaleString();
    let onlyDate: string = date.split(" ")[0];

    let currentDay: number = Number(onlyDate.split("/")[0]);
    let currentMonth: number = Number(onlyDate.split("/")[1]);
    let currentYear: number = Number(onlyDate.split("/")[2]);

    let birthDay: number = Number(birthDate.split("/")[0]);
    let birthMonth: number = Number(birthDate.split("/")[1]);
    let birthYear: number = Number(birthDate.split("/")[2]);

    if (currentYear - birthYear < 18) {
      throw new Error("Somente maiores de 18 anos podem se cadastrar.");
    }

    if (currentYear - birthYear === 18 && currentMonth < birthMonth) {
      throw new Error("Somente maiores de 18 anos podem se cadastrar.");
    }

    if (
      currentYear - birthYear === 18 &&
      currentMonth === birthMonth &&
      currentDay < birthDay
    ) {
      throw new Error("Somente maiores de 18 anos podem se cadastrar.");
    }

    if (
      users.find((item) => {
        return item.cpf === cpf;
      })
    ) {
      throw new Error("Usuário já possui cadastro.");
    }

    let user: user = {
      name: name,
      cpf: cpf,
      birthDate: birthDate,
      transactions: {
        balance: 0,
        extract: [],
      },
    };

    users.push(user);

    res.status(200).send(users);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

app.get("/users/:cpf", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    let cpf: string = req.params.cpf;

    let user: user | undefined = users.find((item) => {
      return item.cpf === cpf;
    });

    if (!user) {
      errorCode = 404;
      throw new Error("Usuário não encontrado");
    }

    res.status(200).send(user);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});
