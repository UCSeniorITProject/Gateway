const request = require("request-promise");
const { drugService } = require("../../../config").services;
const { boomify } = require("boom");

exports.getDrugTypeWithFilter = async (filter) => {
  try {
    const requestOptions = {
      method: "GET",
      uri: `${drugService}/api/drug-type`,
      qs: filter,
      json: true,
    };

    const drugTypes = await request(requestOptions);
    return drugTypes.drugTypes;
  } catch (err) {
    throw boomify(err);
  }
};
