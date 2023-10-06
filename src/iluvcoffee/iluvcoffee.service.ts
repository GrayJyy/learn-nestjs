import {
  // HttpException,
  // HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateIluvcoffeeDto } from './dto/create-iluvcoffee.dto';
import { UpdateIluvcoffeeDto } from './dto/update-iluvcoffee.dto';
import { Coffee } from './entities/iluvcoffee.entity';

@Injectable()
export class IluvcoffeeService {
  private coffees: Coffee[] = [
    { id: '1', name: 'stackBuck', brand: 'stb', flavors: ['1'] },
    { id: '2', name: 'stackBuck2', brand: 'stb2', flavors: ['2'] },
    { id: '3', name: 'stackBuck3', brand: 'stb3', flavors: ['3'] },
  ];

  create(createIluvcoffeeDto: CreateIluvcoffeeDto) {
    const { name, brand, flavors } = createIluvcoffeeDto;
    this.coffees = [
      ...this.coffees,
      {
        id: `${Number(this.coffees[this.coffees.length - 1].id) + 1}`,
        name,
        brand,
        flavors,
      },
    ];
    return this.coffees;
  }

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    if (!this.coffees.some((i) => i.id === id)) {
      // return new HttpException(`${id} is not found`, HttpStatus.NOT_FOUND);
      return new NotFoundException(`${id} is not found`).getResponse();
    }
    return this.coffees.find((i) => i.id === id);
  }

  update(id: string, updateIluvcoffeeDto: UpdateIluvcoffeeDto) {
    this.coffees = this.coffees.map((i) => {
      if (i.id === id) {
        return {
          id,
          name: i.name,
          brand: i.brand,
          flavors: i.flavors,
          ...updateIluvcoffeeDto,
        };
      } else {
        return i;
      }
    });
    return this.coffees;
  }

  remove(id: string) {
    this.coffees = this.coffees.filter((i) => i.id !== id);
    return this.coffees;
  }
}
