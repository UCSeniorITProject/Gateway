const { boomify } = require("boom");
const { drugService } = require("../../../config").services;
const request = require("request-promise");

exports.createPharmacy = async (pharmacy) => {
  try {
    const requestOptions = {
      method: "POST",
      uri: `${drugService}/api/pharmacy`,
      body: {
        pharmacy,
      },
      json: true,
    };

    const pharmacyRequest = await request(requestOptions);
    return pharmacyRequest.pharmacy;
  } catch (err) {
    throw boomify(err);
  }
};

exports.getPharmacyWithFilter = async (filter) => {
  try {
    const requestOptions = {
      method: "GET",
      uri: `${drugService}/api/pharmacy`,
      qs: filter,
      json: true,
    };

    const pharmacies = await request(requestOptions);
    return pharmacies.pharmacies;
  } catch (err) {
    throw boomify(err);
  }
};

exports.patchPharmacy = async (pharmacyId, fieldsToUpdate) => {
  try {
    const requestOptions = {
      method: "PATCH",
      uri: `${drugService}/api/pharmacy/${pharmacyId}`,
      body: {
        pharmacy: fieldsToUpdate,
      },
      json: true,
    };

    const pharmacyRequest = await request(requestOptions);
    return pharmacyRequest.pharmacy;
  } catch (err) {
    throw boomify(err);
  }
};

exports.deletePharmacy = async (pharmacyId) => {
  try {
    const requestOptions = {
      method: "DELETE",
      uri: `${drugService}/api/pharmacy/${pharmacyId}`,
      json: true,
    };

    await request(requestOptions);
    return {};
  } catch (err) {
    throw boomify(err);
  }
};
