import { z } from "zod";
import { courseCreateSchema, courseReadSchema, courseSchema } from "../schemas/course.schemas";
import { QueryResult } from "pg";

type Course = z.infer<typeof courseSchema>;
type CourseCreate = z.infer<typeof courseCreateSchema>;

type CourseResult = QueryResult;

export { Course, CourseCreate, CourseResult };
