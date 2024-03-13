import { Router } from "express";
import middlewares from "../middlewares";
import { courseCreateSchema } from "../schemas/course.schemas";
import { courseControllers } from "../controllers";

const courseRouter: Router = Router();

courseRouter.post(
  "",
  middlewares.validateBody(courseCreateSchema),
  middlewares.verifyToken,
  middlewares.validateAdmin,
  courseControllers.create
);

courseRouter.post(
  "/:courseId/users/:userId",
  middlewares.verifyToken,
  middlewares.validateUserCourseIdExists,
  middlewares.validateAdmin,
  middlewares.validateIdExists,
  courseControllers.addCourse
);


courseRouter.get("", courseControllers.read)

export default courseRouter;
