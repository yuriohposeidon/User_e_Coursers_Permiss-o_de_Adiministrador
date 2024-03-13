import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(60).nonempty(),
  email: z.string().email().max(60).nonempty(),
  password: z.string().max(120).nonempty(),
  admin: z.boolean().default(false),
});



const userCreateSchema = userSchema.omit({ id: true, createdAt: true });
const userUpdateSchema = userCreateSchema.partial();

const userReturnSchema = userSchema.omit({ password: true })
const userReadSchema = userReturnSchema.array()

export { userSchema, userCreateSchema, userUpdateSchema, userReturnSchema, userReadSchema };