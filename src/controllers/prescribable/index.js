const prescribableSchema = require('./schemas');
const prescribableService = require('./service');

module.exports = (fastify, options, next) => {
  fastify.post('/prescribable', {schema: prescribableSchema.createPrescribable}, prescribableService.createPrescribable);
  fastify.delete('/prescribable/:id', {schema: prescribableSchema.deletePrescribable}, prescribableService.deletePrescribable);
  fastify.patch('/prescribable/:id', {schema: prescribableSchema.patchPrescribable}, prescribableService.patchPrescribable);
  fastify.get('/prescribable', {schema: prescribableSchema.getPrescribableWithFilter}, prescribableService.getPrescribableWithFilter);
	fastify.get('/prescribable/:patientId/by-month', {schema: prescribableSchema.getNumPrescribablesPerMonth}, prescribableService.getPrescribableByMonth);
	fastify.get('/prescribable/doctor/:doctorId/breakdown', {schema: prescribableSchema.getPrescribableBreakDownByDoctor}, prescribableService.getPrescribableBreakDownByDoctor);
	fastify.get('/prescribable/doctor/:doctorId/patient/breakdown', {schema: prescribableSchema.getPrescribableBreakdownByPatientForDoctor}, prescribableService.getPrescribableBreakdownByPatientForDoctor);
	fastify.get('/prescribable/doctor/:doctorId/breakdown/by-month', {schema: prescribableSchema.getNumPrescribablesPerMonthForDoctor}, prescribableService.getNumPrescribablesPerMonthForDoctor);
	next();
}