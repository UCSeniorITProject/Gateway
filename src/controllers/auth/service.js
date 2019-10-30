const {boomify} = require('boom');
const SecurityManagementService = require('../../lib/SecurityManagementService');

exports.login = async (req, reply) => {
  try {
    const tokens = await SecurityManagementService.login(req.body.authDetails.username, req.body.authDetails.password);
    if('accessToken' in tokens === false){
      return reply
              .code(401)
              .send();
    }
    return {...tokens};
  } catch (err) {
    throw boomify(err);
  }
};  