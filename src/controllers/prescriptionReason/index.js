const prescriptionReasonSchema = require("./schemas");
const prescriptionReasonService = require("./service");

module.exports = (fastify, options, next) => {
  fastify.get(
    "/prescription-reason",
    { schema: prescriptionReasonSchema.getPrescriptionReasonWithFilter },
    prescriptionReasonService.getPrescriptionReasonsWithFilter
  );
  fastify.patch(
    "/prescription-reason/:id",
    { schema: prescriptionReasonSchema.patchPrescriptionReason },
    prescriptionReasonService.patchPrescriptionReason
  );
  fastify.delete(
    "/prescription-reason/:id",
    { schema: prescriptionReasonSchema.deletePrescriptionReason },
    prescriptionReasonService.deletePrescriptionReason
  );
  fastify.post(
    "/prescription-reason",
    { schema: prescriptionReasonSchema.createPrescriptionReason },
    prescriptionReasonService.createPrescriptionReasons
  );
  fastify.get(
    "/prescription-reason/:patientId/by-prescribable",
    { schema: prescriptionReasonSchema.getPrescriptionReasonByPrescribable },
    prescriptionReasonService.getPrescriptionReasonByPrescribable
  );
  fastify.get(
    "/prescription-reason/:patientId/by-patient",
    { schema: prescriptionReasonSchema.getPrescriptionReasonCount },
    prescriptionReasonService.getPrescriptionReasonCount
  );
  next();
};
