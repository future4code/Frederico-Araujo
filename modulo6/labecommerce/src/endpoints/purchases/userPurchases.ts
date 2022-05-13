import { Request, Response } from "express";
import connection from "../../connection";

export async function userPurchases(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const userId = req.params.user_id;
    const purchases = await connection("labecommerce_purchases");

    if (purchases.length === 0) {
      throw new Error("Nenhum compra encontrada.");
    }

    const userPurchases = purchases.filter((item) => {
      return item.user_id === userId;
    });

    if (!userPurchases) {
      throw new Error("Nenhuma compra encontrada para esse usuário.");
    }

    res.status(200).send(userPurchases);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
