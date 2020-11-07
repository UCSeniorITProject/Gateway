const request = require("request-promise");
const { patientService } = require("../../../config").services;
const { boomify } = require("boom");
const qs = require("querystring");

exports.getPatientWithFilter = async (filter) => {
  try {
    console.log(filter);
    const requestOptions = {
      method: "GET",
      uri: `${patientService}/api/patient`,
      qs: filter,
      json: true,
    };

    const patientRequest = await request(requestOptions);
    return patientRequest.patients;
  } catch (err) {
    throw boomify(err);
  }
};

exports.createPatient = async (patient) => {
  try {
    const requestOptions = {
      method: "POST",
      uri: `${patientService}/api/patient`,
      body: {
        patient,
      },
      json: true,
    };

    const newPatient = await request(requestOptions);
    return newPatient.patient;
  } catch (err) {
    throw boomify(err);
  }
};

exports.deletePatient = async (patientId) => {
  try {
    const requestOption = {
      method: "DELETE",
      uri: `${patientService}/api/patient/${patientId}`,
    };
    await request(requestOption);
  } catch (err) {
    throw boomify(err);
  }
};

exports.updatePatient = async (patientId, fieldsToPatch) => {
  try {
    const requestOption = {
      method: "PATCH",
      uri: `${patientService}/api/patient/${patientId}`,
      json: true,
      body: {
        patient: fieldsToPatch,
      },
    };

    const patientUpdate = await request(requestOption);
    return { ...patientUpdate };
  } catch (err) {
    throw boomify(err);
  }
};
