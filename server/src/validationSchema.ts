import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  // Common
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),
  CLIENT_URL: Joi.string().required(),

  SERVER_PORT: Joi.number().port().default(3000),
  // Database
  POSTGRES_HOST: Joi.string().hostname().required(),
  POSTGRES_PORT: Joi.number().port().default(5432),
  POSTGRES_DB: Joi.string().required(),
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),

  // TypeORM
  TYPEORM_SYNC: Joi.boolean().required(),
});
