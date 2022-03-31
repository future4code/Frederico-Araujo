import express, { Request, Response } from "express";
import cors from "cors";
import { posts, users } from "./data";

const app = express();

app.use(express.json()); //GARANTIR QUE TODA A COMUNICAÇAO SEJA FEITA EM JSON
app.use(cors()); // HABILITAR A COMUNICAÇAO ENTRE DOMINIOS

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/users", (req: Request, res: Response) => {
  res.send(users);
});

app.get("/posts", (req: Request, res: Response) => {
  res.send(posts);
});

app.get("/user-posts", (req: Request, res: Response) => {
  let userPost = posts.filter((item) => {
    return item.userId === Number(req.headers.id);
  });

  if (userPost.length === 0) {
    res.send("Nenhum post adicionado");
  } else {
    res.send(userPost);
  }
});

// app.delete("/user-posts", (req: Request, res: Response) => {
//   let userPost = posts.filter((item) => {
//     return item.userId === Number(req.headers.id);
//   });

//   if (userPost.length === 0) {
//     res.send("Nenhum post adicionado");
//   } else {
//     res.send(userPost);
//     res.send("Deletado.");
//   }
// });

app.listen(3003, () => {
  console.log("O server está rodando...");
});
