import format from "pg-format";
import { UserCreate, UserRead, UserResult, UserReturn, UserUpdate } from "../interfaces";
import { client } from "../database";
import { hash } from "bcryptjs";
import { userReadSchema, userReturnSchema } from "../schemas/user.schemas";
import { AppError } from "../errors";

const create = async (payload: UserCreate): Promise<UserReturn> => {
  payload.password = await hash(payload.password, 10);

  const queryFormat: string = format(
    'INSERT INTO "users" (%I) VALUES (%L) RETURNING *;',
    Object.keys(payload),
    Object.values(payload)
  );

  const query: UserResult = await client.query(queryFormat);
  return userReturnSchema.parse(query.rows[0]);
};

const read = async (): Promise<UserRead> => {
  const query: UserResult = await client.query('SELECT * FROM "users";');
  return userReadSchema.parse(query.rows);
};

const retrieve = async (userId: string) => {
  const queryString: string = `  
    SELECT 
	    "c"."id" "courseId",
	    "c"."name" "courseName",
	    "c"."description" "courseDescription",
	    "u"."id" "userId",
	    "u"."name" "userName",
      "u"."email" "userEmail",
      "uc"."active" "userActiveInCourse"
    FROM "users" "u" 
    LEFT JOIN "userCourses" "uc" 
    	ON "u"."id" = "uc"."userId" 
    LEFT JOIN "courses" "c" 
    	ON "c"."id" = "uc"."courseId" 
    WHERE "uc"."userId" = $1;
    `;
  const queryResult = await client.query(queryString, [userId]);

  if (!queryResult.rowCount) {
    throw new AppError("No course found", 404);
  }
  return queryResult.rows;
};


export default { create, read, retrieve };
