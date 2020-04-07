const roleService = require('./service');
const roleSchemas = require('./schemas');

module.exports = (fastify, options, next) => {
	fastify.get('/role', {schema: roleSchemas.getRolesWithFilter}, roleService.getRoleWithFilter);
  next();
};