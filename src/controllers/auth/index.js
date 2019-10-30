const securityService = require('./service');
const securitySchema = require('./schemas');

module.exports = (fastify, options, next) => {
  fastify.post('/login', {schema: securitySchema.login}, securityService.login);
  next();
};