import { PartialType } from '@nestjs/mapped-types';
import { CreateIluvcoffeeDto } from './create-iluvcoffee.dto';

export class UpdateIluvcoffeeDto extends PartialType(CreateIluvcoffeeDto) {}
