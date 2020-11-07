const presriptionPrescribableDrug = require("../../lib/PharmacyService/prescriptionPrescribableDrug");
const { boomify } = require("boom");

exports.createPrescriptionPrescribableDrug = async (req, reply) => {
  try {
    const presriptionPrescribableDrugToCreate = await presriptionPrescribableDrug.createPrescriptionPrescribableDrug(
      req.body.prescriptionPrescribableDrug,
      req.params.patientId
    );
    return {
      prescriptionPrescribableDrug: presriptionPrescribableDrugToCreate,
    };
  } catch (err) {
    throw boomify(err);
  }
};

exports.getPrescriptionPrescribableDrugCountForLastYear = async (
  req,
  reply
) => {
  try {
    const prescriptionPrescribableDrugCount = await presriptionPrescribableDrug.getPrescriptionPrescribableDrugCountForLastYear(
      req.params.patientId
    );
    return { data: prescriptionPrescribableDrugCount };
  } catch (err) {
    throw boomify(err);
  }
};

exports.getCountOfPrescribablesPerDoctor = async (req, reply) => {
  try {
    const prescribablesPerDoctor = await presriptionPrescribableDrug.getCountOfPrescribablesPerDoctor(
      req.params.patientId
    );
    return { data: prescribablesPerDoctor };
  } catch (err) {
    throw boomify(err);
  }
};
