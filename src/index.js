const config = require('../config');
const fastify = require('fastify')({
  logger: config.shouldFastifyLog,
  pluginTimeout: 60000,
});
const swagger = require('../swagger-config');
const {verifyToken} = require('./lib/SecurityManagementService');
const unAuthorizedEndpoints = [{
  method: 'POST',
  url: '/api/security-management/user'
},
{
  method: 'GET',
  url: '/api/security-management/user'
},
{
  method: 'POST',
  url: '/api/security-management/login',
}];
(async () => {
  try {
    fastify.register(require('fastify-cors'), { 
      origin: true,
      methods: ['GET', 'PUT', 'POST', 'PATCH', 'OPTIONS'],
    });
    fastify.addHook('onRequest', async (req, reply) => {
      //allow endpoints that do not require auth
      if(unAuthorizedEndpoints.filter(x => x.url === req.raw.originalUrl.substr(0, req.raw.originalUrl.indexOf('?') > -1 ? req.raw.originalUrl.indexOf('?') : req.raw.originalUrl.length) && req.raw.method === x.method).length > 0){
        return;
      }

      const authToken = req.headers.authorization;
      if(authToken === undefined){
        return reply
                  .code(401)
                  .send({msg: 'Access token was not found'});
      }

      const tokenVerificationRequest = await verifyToken(authToken.substr(authToken.indexOf('Bearer') + 7, authToken.length));
      if(!tokenVerificationRequest.valid){
        return reply
            .code(401)
            .send({msg: 'Access token is invalid'});
      }
    });

    fastify.register(require('fastify-swagger'), swagger.options);
    fastify.register(require('./controllers/auth'), {prefix: '/api/security-management'});
    fastify.register(require('./controllers/patient'), {prefix: '/api/patient-service'});
    await fastify.listen(config.port, config.serverHost);
    fastify.swagger();
    fastify.log.info(`Server is listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();


module.exports = fastify;
 