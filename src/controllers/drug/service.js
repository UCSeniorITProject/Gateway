const { boomify } = require("boom");
const DrugService = require("../../lib/PharmacyService/Drug");

exports.createDrug = async (req, reply) => {
  try {
    const drug = await DrugService.createDrug(req.body.drug);
    return { drug };
  } catch (err) {
    throw boomify(err);
  }
};

exports.getDrugList = async (req, reply) => {
  try {
    const drugs = await DrugService.getDrugList();
    return { drugs };
  } catch (err) {
    throw boomify(err);
  }
};

exports.deleteDrug = async (req, reply) => {
  try {
    await DrugService.deleteDrug(req.params.id);
    return {};
  } catch (err) {
    throw boomify(err);
  }
};

exports.patchDrug = async (req, reply) => {
  try {
    const drug = await DrugService.patchDrug(req.params.id, req.body.drug);
    return { drug };
  } catch (err) {
    throw boomify(err);
  }
};

exports.getDrugsWithFilter = async (req, reply) => {
  try {
    const drugs = await DrugService.getDrugWithFilter(req.query);
    return { drugs };
  } catch (err) {
    throw boomify(err);
  }
};
