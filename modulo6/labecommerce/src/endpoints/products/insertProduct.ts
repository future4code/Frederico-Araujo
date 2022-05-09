import { Request, Response } from "express";
import connection from "../../connection";
import { product } from "../../types";

export async function insertProducts(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const product: product = {
      id: Date.now().toString(),
      name: req.body.name,
      price: req.body.price,
      image_url: req.body.image_url,
    };

    if (
      typeof product.name !== typeof "" ||
      typeof product.price !== typeof 1 ||
      typeof product.image_url !== typeof ""
    ) {
      throw new Error("Insira as informações corretamente.");
    }

    await connection("labecommerce_products").insert({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
    });

    res.status(201).send("Cadastro concluído.");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
}
