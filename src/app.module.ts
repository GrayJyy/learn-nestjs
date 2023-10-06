import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoController } from './demo/demo.controller';
import { UserModule } from './user/user.module';
import { IluvcoffeeModule } from './iluvcoffee/iluvcoffee.module';

@Module({
  imports: [UserModule, IluvcoffeeModule],
  controllers: [AppController, DemoController],
  providers: [AppService],
})
export class AppModule {}
