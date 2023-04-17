/* eslint-disable prettier/prettier */
import { Address } from './address.model';
import { CreditCard } from './credit-card.model';
import { Pet } from './pet.model';

/* eslint-disable prettier/prettier */
export class Customer {
  constructor(
    public nome: string,
    public cpf: string,
    public email: string,
    public pets: Pet[],
    public endereço: Address,
    public endcobrança: Address,
    public CreditCard: CreditCard,
    public password: string,
    public status: boolean,
  ) {}
}
