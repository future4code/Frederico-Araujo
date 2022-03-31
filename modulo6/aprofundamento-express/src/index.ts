import express, { Request, Response } from "express";
import cors from "cors";
import { todos, toDo } from "./todos";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando...");
});

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("Pong");
});

app.get("/afazeres-em-andamento", (req: Request, res: Response) => {
  let emAndamento = todos.filter((item) => {
    return item.completed === false;
  });

  res.status(200).send(emAndamento);
});

app.get("/afazeres-concluidos", (req: Request, res: Response) => {
  let concluidos = todos.filter((item) => {
    return item.completed === true;
  });

  res.status(200).send(concluidos);
});

app.post("/nova-tarefa", (req: Request, res: Response) => {
  let tarefa: toDo = req.body;
  todos.push(tarefa);
  res.status(201).send(req.body);
});

app.put("/edita-tarefa/:id", (req: Request, res: Response) => {
  let id = Number(req.params.id);
  let toDo: toDo = todos.filter((item) => {
    return item.id === id;
  })[0];

  todos.splice(todos.indexOf(toDo), 1, { ...toDo, completed: !toDo.completed });

  res.status(200).send("Atualizado com sucesso.");
});

app.delete("/exclui-tarefa/:id", (req: Request, res: Response) => {
  let id: number = Number(req.params.id);
  let toDo: toDo = todos.filter((item) => {
    return item.id === id;
  })[0];

  todos.splice(todos.indexOf(toDo), 1);

  res.status(200).send(toDo);
});

app.get("/tarefas/:userId", (req: Request, res: Response) => {
  let userId: number = Number(req.params.userId);

  let lista: toDo[] = todos.filter((item) => {
    return item.userId === userId;
  });

  res.status(200).send(lista);
});
