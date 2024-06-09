import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger/logger';

const requestLoggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  logger.info(`Request: ${req.method} ${req.url}`);
  next();
};

export default requestLoggerMiddleware;
