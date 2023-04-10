/* eslint-disable prettier/prettier */
export class Address {
  constructor(
    public zipCode: string,
    public street: string,
    public number: string,
    public complement: string,
    public neugborhood: string,
    public city: string,
    public state: string,
    public country: string,
  ) {}
}
