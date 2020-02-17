const securityService = require('./service');
const securitySchema = require('./schemas');

module.exports = (fastify, options, next) => {
  fastify.post('/login', {schema: securitySchema.login}, securityService.login);
  fastify.post('/token/refresh', {schema: securitySchema.refreshToken}, securityService.refreshAccessToken);
  fastify.get('/user', {schema: securitySchema.getWithFilter}, securityService.getUserWithFilter);
  fastify.post('/user', {schema:  securitySchema.createUser}, securityService.createUser);
  fastify.patch('/user/:id', {schema: securitySchema.updateUser}, securityService.updateUser);
  next();
};