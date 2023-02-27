const { sequelize } = require('./models');

const fastify = require('fastify')({ logger: true });

fastify.register(require('./routes/tutorial'));

const PORT = process.env.PORT || 8080;
const start = async () => {
  try {
      await fastify.listen({ port: PORT });
      console.log("Server up on http://localhost:8080");
    //   await sequelize.sync();
      await sequelize.sync({ alter: true }).then(() => {
  console.log("Drop and re-sync db.");
});
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();