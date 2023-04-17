/* eslint-disable prettier/prettier */
import { Flunt } from '../utils/flunt';
import { Customer } from '../models/customer.model';
import { Contract } from './contract';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateCustomerContract implements Contract {
    errors: any[];
    validate(model: Customer): boolean {
        const flunt = new Flunt();

        flunt.hasMinLen(model.nome, 5, 'Nome inválido');
        flunt.isEmail(model.email, 'E-mail inválido');
        flunt.isFixedLen(model.cpf, 11, 'CPF inválido');
        flunt.hasMinLen(model.password, 6, 'Senha inválida');

        this.errors = flunt.errors;
        return flunt.isValid();
    }

}