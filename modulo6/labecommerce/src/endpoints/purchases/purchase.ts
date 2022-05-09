import { Request, Response } from "express";
import connection from "../../connection";
import { purchase, product } from "../../types";

export async function purchases(req: Request, res: Response): Promise<void> {
  try {
    const purchase: purchase = {
      userId: req.body.userId,
      productId: req.body.productId,
      quantity: req.body.quantity,
    };

    const products: product[] = await connection("labecommerce_products");

    const product: product | undefined = products.find((item) => {
      if (item.id === purchase.productId) {
        return item;
      }
      return undefined;
    });

    if (
      typeof purchase.userId !== typeof "" ||
      typeof purchase.productId !== typeof "" ||
      typeof purchase.quantity !== typeof 1
    ) {
      throw new Error("Insira as informações corretamente.");
    }

    if (!product) {
      throw new Error("Nenhum produto encontrado.");
    }

    if (product) {
      const totalPrice = purchase.quantity * product.price;

      await connection("labecommerce_purchases").insert({
        id: Date.now().toString(),
        user_id: purchase.userId,
        product_id: purchase.productId,
        quantity: purchase.quantity,
        total_price: totalPrice,
      });
    }

    res.status(201).send("Compra concluída.");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
