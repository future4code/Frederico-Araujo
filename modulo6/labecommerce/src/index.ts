import { purchase } from "./types";
import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { signUpUser } from "./endpoints/users/signup";
import { getUsers } from "./endpoints/users/getUsers";
import { getProducts } from "./endpoints/products/getProducts";
import { insertProducts } from "./endpoints/products/insertProduct";
import { getPurchases } from "./endpoints/purchases/getPurchases";
import { purchases } from "./endpoints/purchases/purchase";
import { userPurchases } from "./endpoints/purchases/userPurchases";

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:3003`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.get("/users", getUsers);

app.post("/users", signUpUser);

app.get("/products", getProducts);

app.post("/products", insertProducts);

app.get("/purchases", getPurchases);

app.get("/users/:user_id/purchases", userPurchases);

app.post("/purchases", purchases);
