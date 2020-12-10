import { 
    addNewUser, 
    getUsers, 
    getUserWithId,
    updateUser,
    deleteUser
         } 
from '../controllers/userController';

const routes = (app) => {
    app.route('/users')
    // GET endpoint
    .get(getUsers)
    // POST endpoint
    .post(addNewUser);

    app.route('/user/:UserId')
    // GET Specific User
    .get(getUserWithId)
    // UPDATE Specifc User
    .put(updateUser)
    // DELETE Specifc User
    .delete(deleteUser)
}

export default routes;