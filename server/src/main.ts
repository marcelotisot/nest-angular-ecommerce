import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

// Variables de entorno
import { envs } from './config/enviroment';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(envs.appPort);
  logger.log(`App running on port: ${ envs.appPort }`);
}
bootstrap();
