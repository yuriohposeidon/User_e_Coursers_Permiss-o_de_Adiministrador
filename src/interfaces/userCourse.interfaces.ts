import { z } from "zod";
import { userAddCouseSchema } from "../schemas/userCourses.schemas";

type UserAddCourse = z.infer<typeof userAddCouseSchema>

export { UserAddCourse }