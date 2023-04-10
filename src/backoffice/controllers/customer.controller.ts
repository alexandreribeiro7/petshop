/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Customer } from '../models/customer.model';
import { Result } from '../models/result.model';

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
