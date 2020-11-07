const prescriptionRequests = require("../../lib/PharmacyService/Prescription");
const { boomify } = require("boom");

exports.createPrescription = async (req, reply) => {
  try {
    const prescription = await prescriptionRequests.createPrescription(
      req.body.prescription
    );
    if (
      prescription.errorMessage !== undefined &&
      prescription.errorMessage !== ""
    ) {
      return reply.status(400).send({ msg: prescription.errorMessage });
    }
    return { prescription };
  } catch (err) {
    throw boomify(err);
  }
};

exports.patchPrescription = async (req, reply) => {
  try {
    const prescription = await prescriptionRequests.patchPrescription(
      req.params.id,
      req.body.prescription
    );
    return { prescription };
  } catch (err) {
    throw boomify(err);
  }
};

exports.deletePrescription = async (req, reply) => {
  try {
    await prescriptionRequests.deletePrescription(req.params.id);
    return {};
  } catch (err) {
    throw boomify(err);
  }
};

exports.getPrescriptionsAggregatedByMonthForYear = async (req, reply) => {
  try {
    const prescriptionsByMonth = await prescriptionRequests.getPrescriptionsAggregatedByMonthForYear(
      req.params.patientId
    );

    return { data: prescriptionsByMonth };
  } catch (err) {
    throw boomify(err);
  }
};

exports.getPrescriptionsByMonthForDoctor = async (req, reply) => {
  try {
    const prescriptionsByMonth = await prescriptionRequests.getPrescriptionsForMonthByDoctor(
      req.params.doctorId
    );
    return { data: prescriptionsByMonth };
  } catch (err) {
    throw boomify(err);
  }
};

exports.getPrescription = async (req, reply) => {
  try {
    const prescription = await prescriptionRequests.getPrescriptionById(
      req.params.id
    );
    return { prescription };
  } catch (err) {
    throw boomify(err);
  }
};
