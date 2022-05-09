import { Request, Response } from "express";
import connection from "../../connection";
import { user } from "../../types";

export async function getUsers(req: Request, res: Response): Promise<void> {
  try {
    const users = await connection("labecommerce_users");

    if (users.length === 0) {
      throw new Error("Nenhum usuário encontrado.");
    }

    res.status(201).send(users);
  } catch (error: any) {
    res.send(error.message);
  }
}
