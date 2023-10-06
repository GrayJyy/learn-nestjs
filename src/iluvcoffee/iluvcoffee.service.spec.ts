import { Test, TestingModule } from '@nestjs/testing';
import { IluvcoffeeService } from './iluvcoffee.service';

describe('IluvcoffeeService', () => {
  let service: IluvcoffeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IluvcoffeeService],
    }).compile();

    service = module.get<IluvcoffeeService>(IluvcoffeeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
