import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  DB_NAME: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  PORT: number;
  JWT_SECRET: string;
}

// Validar el esquema y retornar errores
const envSchema = joi.object({
  DB_NAME: joi.string().required(),
  DB_HOST: joi.string().required(),
  DB_PORT: joi.number().required(),
  DB_USERNAME: joi.string().required(),
  DB_PASSWORD: joi.string().required(),
  PORT: joi.number().required(),
  JWT_SECRET: joi.string().required(),
})
.unknown(true);

const { error, value } = envSchema.validate( process.env );

if ( error ) {
  throw new Error(`Config validation error: ${ error.message }`);
}

// Exponer las variables

const envVars: EnvVars = value;

export const envs = {
  dbName: envVars.DB_NAME,
  dbHost: envVars.DB_HOST,
  dbPort: envVars.DB_PORT,
  dbUsername: envVars.DB_USERNAME,
  dbPassword: envVars.DB_PASSWORD,
  appPort: envVars.PORT,
  jwtSecret: envVars.JWT_SECRET,
}
