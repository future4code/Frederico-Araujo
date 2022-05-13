import { Request, Response } from "express";
import connection from "../../connection";
import { user } from "../../types";

export async function signUpUser(req: Request, res: Response): Promise<void> {
  try {
    const user: user = {
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };

    if (
      typeof user.name !== typeof "" ||
      typeof user.email !== typeof "" ||
      typeof user.password !== typeof ""
    ) {
      throw new Error("Insira as informações corretamente.");
    }

    await connection("labecommerce_users").insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });

    res.status(201).send("Cadastro concluído.");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
