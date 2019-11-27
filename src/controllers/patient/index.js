const patientService = require('./service');
const patientSchema = require('./schemas');

module.exports = (fastify, options, next) => {
  fastify.post('/', {schema: patientSchema.createPatient}, patientService.createPatient);
  next();
}