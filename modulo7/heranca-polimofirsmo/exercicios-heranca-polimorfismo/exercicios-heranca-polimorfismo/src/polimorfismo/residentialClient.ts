import { Client } from "./client";
import { Residence } from "./residence";

export class ResidentialClient extends Residence implements Client {
  constructor(
    private cpf: number,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    residenceQuantity: number,
    cep: string
  ) {
    super(residenceQuantity, cep);
  }

  public getCpf(): number {
    return this.cpf;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}

// Possui propriedades cpf, name, registrationNumber, consumedEnergy, residenceQuantity e cep.
// Possui os métodos getCpf e calculateBull
