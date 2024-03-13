import { z } from "zod";

const userAddCouseSchema = z.object({
    courseId: z.number().positive()
})

export { userAddCouseSchema }