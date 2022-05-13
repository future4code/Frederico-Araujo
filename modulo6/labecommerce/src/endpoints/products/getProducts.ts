import { Request, Response } from "express";
import connection from "../../connection";

export async function getProducts(req: Request, res: Response): Promise<void> {
  try {
    const products = await connection("labecommerce_products");

    if (products.length === 0) {
      throw new Error("Nenhum usuário encontrado.");
    }

    res.status(201).send(products);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
