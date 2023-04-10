/* eslint-disable prettier/prettier */
import { Address } from './address.model';
import { CreditCard } from './credit-card.model';
import { Pet } from './pet.model';

/* eslint-disable prettier/prettier */
export class Customer {
  constructor(
    public name: string,
    public document: string,
    public email: string,
    public pets: Pet[],
    public billingAddress: Address,
    public shippingAddress: Address,
    public CreditCard: CreditCard,
    public password: string,
    public active: boolean,
  ) {}
}
