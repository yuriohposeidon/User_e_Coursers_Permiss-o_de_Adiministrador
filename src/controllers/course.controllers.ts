import { Request, Response } from "express";
import { courseServices } from "../services";
import { Course,  } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const {validated} = res.locals
  const courses: Course = await courseServices.create(validated);
  return res.status(201).json(courses);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const courses: Array<Course> = await courseServices.read()
  return res.status(200).json(courses)
}

const addCourse = async (req: Request, res: Response): Promise<Response> => {
    const message: string = await courseServices.addCourse(req.params.userId, req.params.courseId)

    return res.status(201).json(message)
  }
export default { create, read, addCourse };