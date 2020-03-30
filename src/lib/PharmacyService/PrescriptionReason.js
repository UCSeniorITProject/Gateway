const request = require('request-promise');
const {drugService} = require('../../../config').services;
const {boomify} = require('boom');

exports.createPrescriptionReason = async (prescriptionReason) => {
  try {
    const requestOptions = {
      method: 'POST',
      uri: `${drugService}/api/prescription-reason`,
      body: {
        prescriptionReason,
      },
      json: true,
    };

    const prescriptionReasonRequest = await request(requestOptions);
    return prescriptionReasonRequest.prescriptionReason;
  } catch (err) {
    throw boomify(err);
  }
};

exports.getPrescriptionReasounCount = async (patientId) => {
	try {
		const requestOptions = {
			method: 'GET',
			uri: `${drugService}/api/prescription-reason/${patientId}/by-patient`,
			json: true,
		};

		const prescriptionReasonCount = await request(requestOptions);
		return prescriptionReasonCount.data;
	} catch (err){
		throw boomify(err);
	}
}

exports.getPrescriptionReasonByPrescribable = async (patientId) => {
	try {
		const requestOptions = {
			method: 'GET',
			uri: `${drugService}/api/prescription-reason/${patientId}/by-prescribable`,
			json: true,
		};

		const prescriptionReasonsByPrescribable = await request(requestOptions);
		return prescriptionReasonsByPrescribable.data;
	} catch (err) {
		throw boomify(err);
	}
};

exports.patchPrescriptionReason = async (prescriptionReasonId, prescriptionReason) => {
  try {
    const requestOptions = {
      method: 'PATCH',
      uri: `${drugService}/api/prescription-reason/${prescriptionReasonId}`,
      body: {
        prescriptionReason,
      },
      json: true,
    };

    const prescriptionReasonRequest = await request(requestOptions);
    return prescriptionReasonRequest.prescriptionReason;
  } catch (err) {
    throw boomify(err);
  }
};

exports.deletePrescriptionReason = async (prescriptionReasonId) => {
  try {
    const requestOptions = {
      method: 'DELETE',
      uri: `${drugService}/api/prescription-reason/${prescriptionReasonId}`,
      json: true,
    };

    await request(requestOptions);
    return {};
  } catch (err) {
    throw boomify(err);
  }
};

exports.getPrescriptionReasonWithFilter = async (filter) => {
  try {
    const requestOptions = {
      method: 'GET',
      uri: `${drugService}/api/prescription-reason`,
      qs: filter,
      json: true,
    };

    const prescriptionReasons = await request(requestOptions);
    return prescriptionReasons.prescriptionReasons;
  } catch (err) {
    throw boomify(err);
  }
};