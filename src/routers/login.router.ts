import { Router } from "express";
import middlewares from "../middlewares";
import { loginCreate } from "../schemas/login.schemas";
import loginControllers from "../controllers/login.controllers";

const loginRouter: Router = Router()

loginRouter.post("", middlewares.validateBody(loginCreate), loginControllers.create);


export default loginRouter