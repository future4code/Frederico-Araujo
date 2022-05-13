import { Request, Response } from "express";
import connection from "../../connection";

export async function getPurchases(req: Request, res: Response): Promise<void> {
  try {
    const purchases = await connection("labecommerce_purchases");

    if (purchases.length === 0) {
      throw new Error("Nenhum compra encontrada.");
    }

    res.status(200).send(purchases);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
