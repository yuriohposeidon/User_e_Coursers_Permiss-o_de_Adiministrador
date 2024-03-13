import {
  userSchema,
  userCreateSchema,
  userUpdateSchema,
  userReturnSchema,
  userReadSchema,
} from "./user.schemas";

import { loginCreate } from "./login.schemas";
import { courseSchema, courseCreateSchema, courseReadSchema } from "./course.schemas";
import { userAddCouseSchema } from "./userCourses.schemas";

export default {
  userSchema,
  userCreateSchema,
  userUpdateSchema,
  userReturnSchema,
  userReadSchema,
  loginCreate,
  courseSchema,
  courseCreateSchema,
  courseReadSchema,
  userAddCouseSchema,
};
