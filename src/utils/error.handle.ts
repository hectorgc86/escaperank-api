import { Response } from "express";

const handleHttp = (res: Response, error: string, errorLog?: any ) => {
  console.log(errorLog);
  res.status(500);
  res.send({ error });
};

export { handleHttp };
