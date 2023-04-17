/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { Customer } from '../models/customer.model';
import { Result } from '../models/result.model';
import { ValidatorInterceptor } from 'src/interceptors/validator.interceptor';
import { CreateCustomerContract } from '../contracts/custumer.contracts';

// localhost:3000/v1/customer/12345678911
@Controller('v1/customers')
export class CustomerController {
  @Get()
  get() {
    return new Result(null, true, [], null);
  }

  @Get(':document')
  getById(@Param('document') document: string) {
    return new Result(null, true, {}, null);
  }

  @Post()
  @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
  post(@Body() Body: Customer) {
    return new Result('Cliente cadastrado com sucesso.', true, Body, null);
  }

  @Put()
  put(@Param('document') document, @Body() Body) {
    return new Result('Cliente atualizado com sucesso.', true, Body, null);
  }

  @Delete(':document')
  delete(@Param('document') document) {
    return new Result('Cliente removido.', true, Body, null);
  }
}
