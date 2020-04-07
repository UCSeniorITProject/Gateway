const prescriptionSchema = require('./schemas');
const prescriptionService = require('./service');

module.exports = (fastify, options, next) => {
  fastify.get('/prescription/:id', {schema: prescriptionSchema.getPrescriptionById}, prescriptionService.getPrescription);
  fastify.patch('/prescription/:id', {schema: prescriptionSchema.patchPrescription}, prescriptionService.patchPrescription);
  fastify.delete('/prescription/:id', {schema: prescriptionSchema.deletePrescription}, prescriptionService.deletePrescription);
  fastify.post('/prescription', {schema: prescriptionSchema.createPrescription}, prescriptionService.createPrescription);
	fastify.get('/prescription/:patientId/month', {schema: prescriptionSchema.getPrescriptionsByMonthForPatient}, prescriptionService.getPrescriptionsAggregatedByMonthForYear);
	fastify.get('/prescription/doctor/:doctorId/month', {schema: prescriptionSchema.getPrescriptionsByMonthForDoctor}, prescriptionService.getPrescriptionsByMonthForDoctor);
	next();
};