import express, { Request, Response } from "express";
import { arrayDeProdutos } from "./data";
import { produto } from "./data";
import { AddressInfo } from "net";
import { type } from "os";

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

app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Funcionando...");
});

app.post("/produtos", (req: Request, res: Response) => {
  if (!req.body.name || !req.body.price) {
    res
      .status(400)
      .send(
        "Verifique se está passando os parâmetros nome e preço corretamente."
      );
  } else if (typeof req.body.name !== typeof "string") {
    res.status(400).send("Nome deve ser do tipo string.");
  } else if (typeof req.body.price !== typeof 1) {
    res.status(400).send("Preço deve ser do tipo number.");
  } else if (req.body.price <= 0) {
    res.status(400).send("Preço incorreto");
  } else {
    const produto: produto = {
      id: Math.random().toString(7),
      name: req.body.name,
      price: req.body.price,
    };

    arrayDeProdutos.push(produto);

    res.status(201).send(arrayDeProdutos);
  }
});

app.get("/produtos", (req: Request, res: Response) => {
  res.status(200).send(arrayDeProdutos);
});

app.put("/produtos", (req: Request, res: Response) => {
  if (!req.body.price) {
    res.status(400).send("Digite o novo preço do produto");
  } else if (typeof req.body.price !== typeof 1) {
    res.status(400).send("Preço deve ser um número");
  } else if (typeof req.body.price === typeof 1 && req.body.price <= 0) {
    res.status(400).send("Insira um preço válido");
  } else if (
    arrayDeProdutos.filter((item) => {
      return item.name === req.body.name;
    }).length === 0
  ) {
    res.status(400).send("Produto não encontrado");
  } else {
    arrayDeProdutos.map((item) => {
      if (item.name === req.body.name) {
        item.price = req.body.price;
      }
    });
    res.status(200).send(arrayDeProdutos);
  }
});

app.delete("/produtos", (req: Request, res: Response) => {
  if (
    arrayDeProdutos.filter((item) => {
      return item.name === req.body.name;
    }).length === 0
  ) {
    res.status(400).send("Produto não encontrado");
  } else {
    let produto: produto = arrayDeProdutos.filter((item) => {
      return item.name === req.body.name;
    })[0];

    arrayDeProdutos.splice(arrayDeProdutos.indexOf(produto), 1);

    res.status(200).send(arrayDeProdutos);
  }
});
