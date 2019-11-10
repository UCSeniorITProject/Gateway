const securityService = require('./service');
const securitySchema = require('./schemas');

module.exports = (fastify, options, next) => {
  fastify.post('/login', {schema: securitySchema.login}, securityService.login);
  fastify.post('/token/refresh', {sceham: securitySchema.refreshToken}, securityService.refreshAccessToken);
  fastify.get('/user', {schema: securitySchema.getWithFilter}, securityService.getUserWithFilter);
  next();
};