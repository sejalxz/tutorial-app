const fastify = require('fastify');
const { createTutorial, findOneTutorial, findAllTutorials, findAllPublishedTutorials, updateTutorial, deleteTutorial, deleteAllTutorials } = require('../controllers/tutorial');

const tutorialRoutes = (fastify, options, done) => {

    // Create a new Tutorial
    fastify.post("/add", createTutorial);

    // Find a single tutorial with an id
    fastify.get("/:id", findOneTutorial);

    // Find all tutorials
    fastify.get("/tutorials", findAllTutorials);

    // Find all published tutorials
    fastify.get("/published", findAllPublishedTutorials);

    // Update a Tutorial by the id in the request
    fastify.put("/edit/:id", updateTutorial);

    // Delete a single tutorial
    fastify.delete("/edit/:id", deleteTutorial);

    // Delete all tutorials
    fastify.delete("/", deleteAllTutorials);

    done();
}

module.exports = tutorialRoutes;