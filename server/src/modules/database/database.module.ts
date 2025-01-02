import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Variables de entorno
import { envs } from 'src/config/enviroment';

@Module({
  imports: [
    // Conexion DB
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: envs.dbHost,
      port: envs.dbPort,
      database: envs.dbName,
      username: envs.dbUsername,
      password: envs.dbPassword,
      autoLoadEntities: true,
      synchronize: true,
      retryAttempts: 3,
    }),
  ]
})
export class DatabaseModule {}
