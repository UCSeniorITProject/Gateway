const {
  getUserRoleWithFilter,
} = require("../../lib/SecurityManagementService");
const { boomify } = require("boom");

exports.getUserRoleWithFilter = async (req, reply) => {
  try {
    const userRoles = await getUserRoleWithFilter(
      req.query,
      req.headers.authorization
    );

    return { userRoles };
  } catch (err) {
    throw boomify(err);
  }
};
