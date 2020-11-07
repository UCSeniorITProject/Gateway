const prescriptionPrescribableDrugSchema = require("./schemas");
const prescriptionPrescribableDrugService = require("./service");

module.exports = (fastify, options, next) => {
  fastify.post(
    "/:patientId",
    {
      schema:
        prescriptionPrescribableDrugSchema.createPrescriptionPrescribableDrug,
    },
    prescriptionPrescribableDrugService.createPrescriptionPrescribableDrug
  );
  fastify.get(
    "/patient/:patientId/prescribable-count",
    {
      schema:
        prescriptionPrescribableDrugSchema.getPrescriptionPrescribableDrugCountForLastYear,
    },
    prescriptionPrescribableDrugService.getPrescriptionPrescribableDrugCountForLastYear
  );
  fastify.get(
    "/patient/:patientId/doctor-count",
    {
      schema:
        prescriptionPrescribableDrugSchema.getCountOfPrescribablesPerDoctor,
    },
    prescriptionPrescribableDrugService.getCountOfPrescribablesPerDoctor
  );
  next();
};
