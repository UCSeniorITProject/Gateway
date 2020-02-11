const patientService = require('./service');
const patientSchema = require('./schemas');

module.exports = (fastify, options, next) => {
  fastify.post('/patient', {schema: patientSchema.createPatient}, patientService.createPatient);
  fastify.patch('/patient/:id', {schema: patientSchema.updatePatient}, patientService.updatePatient);
  fastify.delete('/patient/:id', {schema: patientSchema.deletePatient}, patientService.deletePatient);
  fastify.get('/patient', {schema: patientSchema.getPatientWithFilter}, patientService.getPatientWithFilter);
  next();
}
