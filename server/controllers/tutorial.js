const { Tutorial } = require('../models')
createTutorial = async (req, reply) => {
    const { title, description, published } = req.body;
    try {
        const publishedStatus = published ? published : false;
        const tutorial = await Tutorial.create({ title, description, published: publishedStatus});

        return reply.send(tutorial);
        
    } catch (err) {
        console.log(err);
        return reply.status(500).send(err);
    }

}

findAllTutorials = async (req, reply) => {
    try {
        const tutorials = await Tutorial.findAll();
        return reply.send(tutorials);
    }
    catch (error) {
        console.log(err);
        return reply.status(500).send(err);
    }
}

findAllPublishedTutorials = async (req, reply) => {
    try {
        const publishedTutorials = await Tutorial.findAll({ where: { published: true } });
        if (!publishedTutorials) {
            return reply.send("No tutorials are published yet!");
        }
        return reply.send(publishedTutorials);
    }
    catch (err) {
        console.log(err);
        return reply.status(500).send(err);
    }
}

findOneTutorial = async (req, reply) => {
    const { id } = req.params;
    try {
        const tutorial = await Tutorial.findOne({ where: { id } });
        return reply.send(tutorial);
    }
    catch (err) {
        console.log(err);
        return reply.status(500).send(err);
    }
}

updateTutorial = async (req, reply) => {
    const { id } = req.params;
    const { title, description, published } = req.body;
    try {
        const tutorial = await Tutorial.findOne({ where: { id } });
        
        tutorial.title = title;
        tutorial.description = description;
        tutorial.published = published;

        await tutorial.save(); 

        return reply.send(tutorial);
    }
    catch (err) {
        console.log(err);
        return reply.status(500).send(err);
    }
}

deleteTutorial = async (req, reply) => {
    const { id } = req.params;
    try {
        const tutorial = await Tutorial.findOne({ where: { id } });
        if (!tutorial) {
            return reply.send({message: `Tutorial ${id} doesn't exist.`});
        }
        await tutorial.destroy();

        return reply.send({message: `Deleted tutorial ${id} successfully!`});
    }
    catch (err) {
        console.log(err);
        return reply.status(500).send(err);
    }
    
}

deleteAllTutorials = async (req, reply) => {
//   Tutorial.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} Tutorials were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all tutorials."
//       });
//     });

    try {
        Tutorial.destroy({
            where: {},
            truncate: false
        });
        return reply.send("All tutorials deleted successfully!");
    }
    catch (err) {
        console.log(err);
        return reply.status(500).send(err);
    }

};




module.exports = {
    createTutorial,
    findAllTutorials,
    findAllPublishedTutorials,
    findOneTutorial,
    updateTutorial,
    deleteTutorial,
    deleteAllTutorials
}