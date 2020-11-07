const { boomify } = require("boom");
const DrugTypeService = require("../../lib/PharmacyService/DrugType");

exports.getDrugTypesWithFilter = async (req, reply) => {
  try {
    const drugTypes = await DrugTypeService.getDrugTypeWithFilter(req.query);

    return { drugTypes };
  } catch (err) {
    throw boomify(err);
  }
};
