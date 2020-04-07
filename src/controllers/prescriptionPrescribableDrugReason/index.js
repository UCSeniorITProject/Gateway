const prescriptionPrescribableDrugReasonSchema = require('./schemas');
const prescriptionPrescribableDrugReasonService = require('./service');

module.exports = (fastify, options, next) => {
	fastify.post('/prescription-prescribable-drug-reason', {schema: prescriptionPrescribableDrugReasonSchema.createPrescriptionPrescribableDrugReason}, prescriptionPrescribableDrugReasonService.createPrescriptionPrescribableDrugReason);
	fastify.get('/prescription-prescribable-drug-reason/doctor/:doctorId/breakdown', {schema: prescriptionPrescribableDrugReasonSchema.getReasonBreakdownByDoctor}, prescriptionPrescribableDrugReasonService.getPrescriptionPrescribableDrugReasonBreakdown);
	next();
};