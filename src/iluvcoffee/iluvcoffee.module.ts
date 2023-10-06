import { Module } from '@nestjs/common';
import { IluvcoffeeService } from './iluvcoffee.service';
import { IluvcoffeeController } from './iluvcoffee.controller';

@Module({
  controllers: [IluvcoffeeController],
  providers: [IluvcoffeeService],
})
export class IluvcoffeeModule {}
