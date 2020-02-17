const prescriptionSchema = require('./schemas');
const prescriptionService = require('./service');

module.exports = (fastify, options, next) => {
  fastify.get('/prescription/:id', {schema: prescriptionSchema.getPrescriptionById}, prescriptionService.getPrescription);
  fastify.patch('/prescription/:id', {schema: prescriptionSchema.patchPrescription}, prescriptionService.patchPrescription);
  fastify.delete('/prescription/:id', {schema: prescriptionSchema.deletePrescription}, prescriptionService.deletePrescription);
  fastify.post('/prescription', {schema: prescriptionSchema.createPrescription}, prescriptionService.createPrescription);
  next();
};