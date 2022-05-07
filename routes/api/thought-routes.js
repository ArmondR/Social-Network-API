const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller');

//route for finding all thoughts
router.route('/').get(getAllThoughts);

// Set up GET all and POST at /api/thoughts/<userId>
router
    .route('/:userId')
    .post(createThought)
    .get(getAllThoughts)

    //Set up GET one, PUT, and DELETE at /api/thoughts/:id

    router
        .route('/:userId/:thoughtId')
         .get(getThoughtById)
         .put(updateThought)
         .delete(deleteThought);

        module.exports = router;