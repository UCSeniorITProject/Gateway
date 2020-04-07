const userRoleService = require('./service');
const userRoleSchema = require('./schemas');

module.exports = (fastify, options, next) => {
	fastify.get('/user-role', {schema: userRoleSchema.getUserRoleWithFilter}, userRoleService.getUserRoleWithFilter);
  next();
};