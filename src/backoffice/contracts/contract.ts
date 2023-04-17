/* eslint-disable prettier/prettier */
export interface Contract {
    errors: any[];
    validate(model: any): boolean;
}