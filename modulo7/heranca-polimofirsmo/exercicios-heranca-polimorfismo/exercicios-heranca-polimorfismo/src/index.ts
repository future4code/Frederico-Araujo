import { IndustrialClient } from "./polimorfismo/industrialClient";
import { CommercialClient } from "./polimorfismo/commercialClient";
import { ResidentialClient } from "./polimorfismo/residentialClient";
import { Industry } from "./polimorfismo/industry";
import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { User } from "./heranca/user";
import { Customer } from "./heranca/customer";
import { Client } from "./polimorfismo/client";
import { Place } from "./polimorfismo/place";
import { Residence } from "./polimorfismo/residence";
import { Commerce } from "./polimorfismo/commerce";
export const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

// Exercícios sobre Herança
// Exercício 1
// Não é possível imprimir a senha, pois não há um getter para isso.
// A mensagem é impressa somente uma vez
const usuario = new User("1", "fredbneves95@gmail.com", "Fred", "123456");
// console.log(usuario.getEmail());

//Exercício 2
// Somente uma vez.
// Somente uma vez, porque a classe customer chama a classe user somente uma vez.
const cust = new Customer("2", "camila@gmail.com", "Camila", "123456", "visa");

// console.log(cust.purchaseTotal);

//Exercício 3
// Não é possível imprimir a senha, pois ela não possui getter.

//Exercício 4 e 5
// console.log(cust.introduceYourself());

// Exercicios polimorfismo

// Exercício 1
// Foi possível imprimir todas as propriedades.
const client: Client = {
  name: "Bia",
  registrationNumber: 1,
  consumedEnergy: 100,
  calculateBill: () => {
    return 2;
  },
};

// console.log(client.name);

//Exercício 2
// O erro impresso pelo ts foi: Não é possível criar uma instância de uma classe abstrata.
// const place = new Place()
// DUVIDA NA B.

//Exercício 3

// const residencia = new Residence(1, "123");
// const comercio = new Commerce(2, "234");
// const industria = new Industry(10, "345");

// console.log(residencia.getCep());
// console.log(comercio.getCep());
// console.log(industria.getCep());

//Exercicio 4

// const residencial = new ResidentialClient(674, "Cassia", 1, 100, 1, "123");
// console.log(residencial.calculateBill());

//Exercicio 5

// const comercial = new CommercialClient(111, "sb", 2, 100, 2, "1234");
// console.log(comercial.calculateBill());

//Exercicio 6

// const industrial = new IndustrialClient(13, "aletec", 5, 100, 4, "145");
// console.log(industrial.calculateBill());
// console.log(industrial.getIndustrialRegisterNumber());
// console.log(industrial.name);
