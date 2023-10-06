import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IluvcoffeeService } from './iluvcoffee.service';
import { CreateIluvcoffeeDto } from './dto/create-iluvcoffee.dto';
import { UpdateIluvcoffeeDto } from './dto/update-iluvcoffee.dto';

@Controller('iluvcoffee')
export class IluvcoffeeController {
  constructor(private readonly iluvcoffeeService: IluvcoffeeService) {}

  @Post()
  create(@Body() createIluvcoffeeDto: CreateIluvcoffeeDto) {
    return this.iluvcoffeeService.create(createIluvcoffeeDto);
  }

  @Get()
  findAll() {
    return this.iluvcoffeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.iluvcoffeeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIluvcoffeeDto: UpdateIluvcoffeeDto,
  ) {
    return this.iluvcoffeeService.update(id, updateIluvcoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.iluvcoffeeService.remove(id);
  }
}
