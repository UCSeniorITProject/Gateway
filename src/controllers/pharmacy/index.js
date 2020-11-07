const pharmacyService = require("./service");
const pharmacySchema = require("./schemas");

module.exports = (fastify, options, next) => {
  fastify.get(
    "/pharmacy/:id",
    { schema: pharmacySchema.getPharmacyById },
    pharmacyService.getPharmacyById
  );
  fastify.get(
    "/pharmacy",
    { schema: pharmacySchema.getPharmacyWithFilter },
    pharmacyService.getPharmacyWithFilter
  );
  fastify.post(
    "/pharmacy",
    { schema: pharmacySchema.createPharmacy },
    pharmacyService.createPharmacy
  );
  fastify.patch(
    "/pharmacy/:id",
    { schema: pharmacySchema.patchPharmacy },
    pharmacyService.patchPharmacy
  );
  fastify.delete(
    "/pharmacy/:id",
    { schema: pharmacySchema.deletePharmacy },
    pharmacyService.deletePharmacy
  );
  next();
};
