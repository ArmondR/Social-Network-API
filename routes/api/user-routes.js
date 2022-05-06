const router = require('express').Router();

const {
    getALLUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
    getAllUsers
} = require('../../controllers/user-controller');

// establish GET all and POST at /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);

  // Establish GET single, PUT and DELETE at /api/users/:id
  router
    .route('/:id')
    .get(getUsersById)
    .put(updateUser)
    .delete(deleteUser);


    module.exports = router;