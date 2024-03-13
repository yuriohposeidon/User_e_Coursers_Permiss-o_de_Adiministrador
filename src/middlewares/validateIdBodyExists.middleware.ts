import { NextFunction, Request, Response } from "express";
import { UserResult } from "../interfaces";
import { client } from "../database";
import { AppError } from "../errors";

const validateIdBodyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { courseId } = req.body;

  const query: UserResult = await client.query(
    'SELECT * FROM "courses" WHERE "id" = $1',
    [courseId]
  );
  if (query.rowCount === 0) {
    throw new AppError("Course not found", 404);
  }

  res.locals = { ...res.locals, foundCourse: query.rows[0] };

  return next();
};

export default validateIdBodyExists;