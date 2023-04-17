/* eslint-disable prettier/prettier */
export class Address {
  constructor(
    public cep: string,
    public rua: string,
    public número: string,
    public complemento: string,
    public bairro: string,
    public cidade: string,
    public estado: string,
    public origem: string,
  ) {}
}
