const router = require('express').Router();

const {
    getALLUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    addFriend
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

    router.route('/:userId/friends')

    router.route("/:id/friends/:friendId")
    .put(addFriend);


    module.exports = router;