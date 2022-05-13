/*
Ex1.
a) O construtor serve para atribuir valores iniciais às propriedades da classe.
c) Criando um getter.

Ex2.
type Transaction = {
  description: string,
  value: number,
  date: string
}

class Transaction {
  private description: string,
  private value: number,
  private date: string  

  const getDescription = () => this.description
  const getValue = () => this.value
  const getDate = () => this.date
}

Ex3.
class Bank {
  private accounts;

  const getAccounts = () => this.accounts
  const setAccounts = (newAccounts) => this.accounts = newAccounts
}

*/
