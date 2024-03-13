import handleErrors from "./handleErrors";
import validateIdExists from "./validateIdExists.middleware";
import validateEmailExists from "./validateEmailExists.middleware";
import validateBody from "./validateBody.middleware";
import verifyToken from "./verifyToken.middleware";
import verifyUserPermission from "./verifyUserPermission.middleware";
import validateAdmin from "./validadeAdmin.middleware";
import validateIdBodyExists from "./validateIdBodyExists.middleware";
import validateUserCourseIdExists from "./validadeUserCourseIdExists.middleware";



export default {
  handleErrors,
  validateIdExists,
  validateEmailExists,
  validateBody,
  verifyToken,
  verifyUserPermission,
  validateAdmin,
  validateUserCourseIdExists,
  validateIdBodyExists,
};
