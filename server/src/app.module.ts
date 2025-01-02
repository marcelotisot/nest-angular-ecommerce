import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Modulos
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [

    // Cargar variables de entorno
    ConfigModule.forRoot(),

    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
