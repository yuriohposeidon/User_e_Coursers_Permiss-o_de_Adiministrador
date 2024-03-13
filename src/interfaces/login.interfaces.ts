import { z } from "zod";
import { loginCreate } from "../schemas/login.schemas";

type LoginCreate = z.infer<typeof loginCreate>
type LoginReturn = { token: string}

export { LoginCreate, LoginReturn}