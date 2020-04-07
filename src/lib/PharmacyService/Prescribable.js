const request = require('request-promise');
const {drugService} = require('../../../config').services;
const {boomify} = require('boom');

exports.createPrescribable = async (prescribable) => {
  try {
    const requestOptions = {
      method: 'POST',
      uri: `${drugService}/api/prescribable`,
      body: {
        prescribable,
      },
      json: true,
    };

    const prescribableRequest = await request(requestOptions);
    return prescribableRequest.prescribable;
  } catch (err) {
    throw boomify(err);
  }
};

exports.getPrescribablesPerMonth = async (patientId) => {
	try {
		const requestOptions = {
			method: 'GET',
			uri: `${drugService}/api/prescribable/${patientId}/by-month`,
			json: true,
		};

		const prescribablesByMonth = await request(requestOptions);
		return prescribablesByMonth.data;
	} catch (err) {
		throw boomify(err);
	}
}

exports.getPrescribableWithFilter = async (filter) => {
  try {
    const requestOptions = {
      method: 'GET',
      uri: `${drugService}/api/prescribable`,
      qs: filter,
      json: true,
    };

    const prescribables = await request(requestOptions);
    return prescribables.prescribables;
  } catch (err) {
    throw boomify(err);
  }
};

exports.deletePrescribable = async (prescribableId) => {
  try {
    const requestOptions = {
      method: 'DELETE',
      uri: `${drugService}/api/prescribable/${prescribableId}`,
      json: true,
    };

    await request(requestOptions);
    return {};
  } catch (err) {
    throw boomify(err);
  }
};

exports.patchPrescribable = async (prescribableId, fieldsToUpdate) => {
  try {
    const requestOptions = {
      method: 'PATCH',
      uri: `${drugService}/api/prescribable/${prescribableId}`,
      body: {
        prescribable: fieldsToUpdate,
      },
      json: true,
    }

    const prescribable = await request(requestOptions);
    return prescribable.prescribable;
  } catch (err) {
    throw boomify(err);
  }
};

exports.getNumberOfPrescribableByMonthForDoctor = async (doctorId) => {
	try {
		const requestOptions = {
			method: 'GET',
			uri: `${drugService}/api/prescribable/doctor/${doctorId}/by-month`,
			json: true,
		};

		const prescribableBreakdown = await request(requestOptions);
		return prescribableBreakdown.data;
	} catch (err) {
		throw boomify(err);
	}
};

exports.getNumberOfPrescribablesByPatientForDoctor = async (doctorId) => {
	try {
		const requestOptions = {
			method: 'GET',
			uri: `${drugService}/api/prescribable/doctor/${doctorId}/patient/breakdown`,
			json: true,
		};

		const prescribableByPatientForMonth = await request(requestOptions);
		return prescribableByPatientForMonth.data;
	} catch (err) {
		throw boomify(err);
	}
};

exports.getNumPrescribablesPerMonthForDoctor = async (doctorId) => {
	try {
		const requestOptions = {
			method: 'GET',
			uri: `${drugService}/api/prescribable/doctor/${doctorId}/breakdown/by-month`,
			json: true,
		};

		const prescribableByDoctorForMonth = await request(requestOptions);
		return prescribableByDoctorForMonth.data;
	} catch (err) {
		throw boomify(err);
	}
};