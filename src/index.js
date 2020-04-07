const config = require('../config');
const qs = require('qs');
const fastify = require('fastify')({
  logger: config.shouldFastifyLog,
  pluginTimeout: 60000,
  querystringParser: str => qs.parse(str),
});
const swagger = require('../swagger-config');
const {verifyToken} = require('./lib/SecurityManagementService');
const {unAuthorizedEndpoints} = require('../unAuthorizedEndpoints');
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
	fastify.register(require('./controllers/prescriptionReason'), {prefix: '/api/pharmacy-service'});
	fastify.register(require('./controllers/userRole'), {prefix: '/api/security-service'})
	fastify.register(require('./controllers/role'), {prefix: '/api/security-service'});
  fastify.register(require('./controllers/prescribable'), {prefix: '/api/pharmacy-service'});
	fastify.register(require('./controllers/auth'), {prefix: '/api/security-management'});
	fastify.register(require('./controllers/pharmacy'), {prefix: '/api/pharmacy-service'});
	fastify.register(require('./controllers/drug'), {prefix: '/api/pharmacy-service'});
	fastify.register(require('./controllers/prescription'), {prefix: '/api/pharmacy-service'});   
	fastify.register(require('./controllers/patient'), {prefix: '/api/patient-service'});
	fastify.register(require('./controllers/prescriptionPrescribableDrug'), {prefix: '/api/pharmacy-service/prescription-prescribable-drug'});
	fastify.register(require('./controllers/prescriptionPrescribableDrugReason'), {prefix: '/api/pharmacy-service'});
	await fastify.listen(config.port, config.serverHost);
    fastify.swagger();
    fastify.log.info(`Server is listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();

module.exports = fastify;
 
