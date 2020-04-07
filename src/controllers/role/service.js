const {getRoleWithFilter} = require('../../lib/SecurityManagementService/');
const {boomify} = require('boom');

exports.getRoleWithFilter = async (req, reply) => {
	try {
		const roles = await getRoleWithFilter(req.query, req.headers.authorization);
		return {roles};
	} catch (err) {
		throw boomify(err);
	}
};