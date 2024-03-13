import { Router } from "express";
import middlewares from "../middlewares";
import { userControllers } from "../controllers";
import { userCreateSchema, userUpdateSchema } from "../schemas/user.schemas";

const userRouter: Router = Router();

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.validateEmailExists,
  userControllers.create
);
userRouter.get("",middlewares.verifyToken, middlewares.validateAdmin, userControllers.read);

// userRouter.use("/:userId", middlewares.verifyToken, middlewares.verifyUserPermission ,middlewares.validateIdExists);

userRouter.get("/:id/courses", middlewares.verifyToken,middlewares.validateAdmin, userControllers.retrieve);


export default userRouter;
