import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(name: string) {
    this.logger = new Logger(name);
  }

  private readonly logger: Logger

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(req.url);
    next();
  }
}