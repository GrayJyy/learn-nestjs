/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  Session,
  // Patch,
  // Param,
  // Delete,
  // Request,s
  Query,
  Res,
  Req,
  // Headers,
  // HttpCode,
  // Version,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';
import { Session as SessionType } from 'express-session';

@Controller({
  path: 'user',
  version: '1',
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  @Get()
  findAll(@Query() query) {
    console.log(query);
    return {
      code: 200,
      data: query,
    };
  }

  @Get('code')
  getCaptcha(
    @Req() _req: Request,
    @Res() res: Response,
    @Session() session: { code: string } & SessionType,
  ) {
    const { text, data } = this.userService.createCode();
    session.code = text;
    res.type('image/svg+xml').send(data);
  }

  // @Get(':id')
  // @HttpCode(202)
  // findOne(@Param() param, @Headers() headers) {
  //   console.log(param);
  //   console.log(headers);
  //   return {
  //     code: 200,
  //     data: param,
  //     message: 'from @Query',
  //   };
  // }

  @Post()
  create(@Body('age') body) {
    console.log(body); // age
    return {
      code: 200,
      data: body,
    };
  }
  // @Get()
  // // @Version('1')
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
