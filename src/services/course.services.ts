import format from "pg-format";
import { Course, CourseCreate, CourseResult, UserAddCourse } from "../interfaces";
import { client } from "../database";
import { QueryResult } from "pg";
import { AppError } from "../errors";

const create = async (payload: CourseCreate): Promise<Course> => {

  const queryFormat: string = format(
    'INSERT INTO "courses" (%I) VALUES (%L) RETURNING *',
    Object.keys(payload),
    Object.values(payload)
  );


  const query: CourseResult = await client.query(queryFormat)
  return query.rows[0];
};

const read = async (): Promise<Array<Course>> => {
  const query: CourseResult = await client.query('SELECT * FROM "courses";');
  return query.rows
}

const addCourse = async (userId: string, courseId: string): Promise<string> => {
  const query: QueryResult = await client.query(
      'SELECT * FROM "userCourses" WHERE "courseId" = $1 AND "userCourseId" = $2;',
      [userId, courseId]
  )

  if(query.rowCount !== 0){
      throw new AppError("Course already added to userCourses", 409);
  }

await client.query(`INSERT INTO "userCourses" ("userId", "courseId") VALUES ($1, $2);`, [
]);

return "Course added to userCourses.";
};


const addUsertoCourse = async (  userId: string,  courseId: string): Promise<void> => {
  const queryString: string = `
    INSERT INTO "userCourses"
      ("userId", "courseId")
    VALUES ($1, $2)
    RETURNING *;
  `;

  await client.query(queryString, [userId, courseId]);
};

const deleteUserFromCourseService = async (
  userId: string,
  courseId: string
): Promise<void> => {
  const queryString: string = `
    DELETE FROM "developerProjects"
    WHERE "developerId" = $1
    AND "projectId" = $2;
  `;

  await client.query(queryString, [userId, courseId]);
};
   

export default { create, read, addCourse, addUsertoCourse, deleteUserFromCourseService };

