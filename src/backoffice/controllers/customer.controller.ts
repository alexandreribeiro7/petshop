/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

// localhost:3000/v1/customer/12345678911
@Controller('v1/customers')
export class CustomerController {

  @Get()
  get() {
    return 'Obter todos clientes';
  }

  @Get(':document')
  getById(@Param('document') document) {
    return 'Obter o cliente ' + document;
  }

  @Post()
  post(@Body() Body) {
    return Body;
  }

  @Put()
  put(@Param('document') document, @Body() Body) {
    return {
        customer: document,
        data: Body,
    };
  }

  @Delete(':document')
  delete(@Param('document') document) {
    return 'Remover um cliente';
  }
}
