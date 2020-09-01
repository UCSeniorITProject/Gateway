const drugTypesSchema = require('./schemas');
const drugTypesService = require('./service');

module.exports = (fastify, options, next) =>  {
  fastify.get('/drug-type', {schema: drugTypesSchema.getDrugTypeWithFilter}, drugTypesService.getDrugTypesWithFilter);
  next();
};