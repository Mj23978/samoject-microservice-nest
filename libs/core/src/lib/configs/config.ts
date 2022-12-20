import type { Config } from './config.interface';

export const config = (): Config => ({
  nest: {
    port: +process.env.PORT || 3000,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: process.env.SWAGGER_ENABLED === 'true' || true,
    title: process.env.SWAGGER_TITLE || 'Nestjs FTW',
    description: process.env.SWAGGER_DESCIPTION || 'The nestjs API description',
    version: process.env.SWAGGER_VERSION || '1.5',
    path: process.env.SWAGGER_PATH || 'api',
  },
  graphql: {
    playgroundEnabled: process.env.GRAPHQL_PLAYGROUND === 'true' || true,
    debug: process.env.GRAPHQL_DEBUG === 'true' || true,
    schemaDestination: process.env.GRAPHQL_SCHEMA_PATH || './src/schema.graphql',
    sortSchema: true,
  },
  security: {
    expiresIn: '2m',
    refreshIn: '7d',
    bcryptSaltOrRound: 10,
  }, 
  surreal: {
    url: process.env.SURREALDB_URL || 'http://127.0.0.1:8000/rpc',
   namespace: process.env.SURREALDB_NAMESPACE || 'test',
   database: process.env.SURREALDB_DATABASE || 'test',
   user: process.env.SURREALDB_USER || 'root',
   pass: process.env.SURREALDB_PASS || 'root',
  }
});
