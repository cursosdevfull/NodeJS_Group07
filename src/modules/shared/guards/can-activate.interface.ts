import { NextFunction, Request, Response } from 'express';

export interface CanActivate {
  canActivate(req: Request, res: Response, next: NextFunction): void;
}
