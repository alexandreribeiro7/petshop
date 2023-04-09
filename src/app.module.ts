import { Module } from '@nestjs/common';
import { BackofficeModule } from './backoffice/backoffice.module';
import { CustomerController } from './backoffice/controllers/customer.controller';

@Module({
  imports: [BackofficeModule],
  controllers: [CustomerController],
  providers: [],
})
export class AppModule {}
