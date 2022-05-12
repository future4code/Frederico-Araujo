import { Client } from "./client";
import { Industry } from "./industry";

export class IndustrialClient extends Industry implements Client {
  constructor(
    private IndustrialRegister: number,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
  }

  public calculateBill(): number {
    return this.machinesQuantity * 100 + this.consumedEnergy * 0.45;
  }

  public getIndustrialRegisterNumber(): number {
    return this.IndustrialRegister;
  }
}
