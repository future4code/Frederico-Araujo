import { Client } from "./client";
import { Commerce } from "./commerce";

export class CommercialClient extends Commerce implements Client {
  constructor(
    private cnpj: number,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
}

// As semelhanças são as propriedades da interface Client e da classe Place.
// As diferenção são as propriedades da classe Commerce.
