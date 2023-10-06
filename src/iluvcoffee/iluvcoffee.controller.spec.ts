import { Test, TestingModule } from '@nestjs/testing';
import { IluvcoffeeController } from './iluvcoffee.controller';
import { IluvcoffeeService } from './iluvcoffee.service';

describe('IluvcoffeeController', () => {
  let controller: IluvcoffeeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IluvcoffeeController],
      providers: [IluvcoffeeService],
    }).compile();

    controller = module.get<IluvcoffeeController>(IluvcoffeeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
