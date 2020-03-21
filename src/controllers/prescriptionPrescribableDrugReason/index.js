const prescriptionPrescribableDrugReasonSchema = require('./schemas');
const prescriptionPrescribableDrugReasonService = require('./service');

module.exports = (fastify, options, next) => {
	fastify.post('/prescription-prescribable-drug-reason', {schema: prescriptionPrescribableDrugReasonSchema.createPrescriptionPrescribableDrugReason}, prescriptionPrescribableDrugReasonService.createPrescriptionPrescribableDrugReason);
	next();
};