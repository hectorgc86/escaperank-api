import { Request, Response, NextFunction } from 'express';

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  //console.log("Logs aquí");
  next();
};

export { logMiddleware };
