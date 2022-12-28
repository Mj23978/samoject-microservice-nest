export interface Config {
  nest: NestConfig;
  cors: CorsConfig;
  swagger: SwaggerConfig;
  graphql: GraphqlConfig;
  security: SecurityConfig;
  surreal: SurrealConfig;
  gateway: GatewayConfig;
  redis: RedisConfig
}

export interface NestConfig {
  port: number;
}

export interface CorsConfig {
  enabled: boolean;
}

export interface SwaggerConfig {
  enabled: boolean;
  title: string;
  description: string;
  version: string;
  path: string;
}

export interface GraphqlConfig {
  playgroundEnabled: boolean;
  debug: boolean;
  schemaDestination: string;
  sortSchema: boolean;
}

export interface SecurityConfig {
  expiresIn: string;
  refreshIn: string;
  bcryptSaltOrRound: string | number;
}

export interface SurrealConfig {
  url: string;
  namespace: string;
  database: string;
  user: string;
  pass: string;
}

export interface GatewayConfig {
  production: boolean;
}

export interface RedisConfig {
  host: string;
  port: number;
}
