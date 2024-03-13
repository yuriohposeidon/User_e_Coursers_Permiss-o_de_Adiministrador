import { z } from "zod";

const courseSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(100),
    description: z.string().nullish(),
})

const courseCreateSchema = courseSchema.omit({id: true})
const courseReadSchema = courseSchema.array()

export { courseSchema, courseCreateSchema, courseReadSchema}