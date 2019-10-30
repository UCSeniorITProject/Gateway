const config = require('../config');
const fastify = require('fastify')({
  logger: config.shouldFastifyLog,
  pluginTimeout: 60000,
});
const swagger = require('../swagger-config');

(async () => {
  try {
    fastify.register(require('fastify-swagger'), swagger.options);
    fastify.register(require('./controllers/auth'), {prefix: '/api/security-management'});
    await fastify.listen(config.port, config.serverHost);
    fastify.swagger();
    fastify.log.info(`Server is listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();


module.exports = fastify;
 