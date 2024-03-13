import { userSchema } from "./user.schemas"

const loginCreate = userSchema.pick({
    email: true,
    password: true,
})

export {loginCreate}  