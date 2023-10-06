import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({ secret: 'Gray', rolling: true, name: 'gray.sid' }));
  // 开启版本控制
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 只有定义在 DTO 里的属性才显示
      // forbidNonWhitelisted: true, // 如果出现DTO 定义外的属性，则拦截请求
    }),
  );
  await app.listen(3000);
}
bootstrap();
