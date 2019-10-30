const request = require('request-promise');
const {securityManagement} = require('../../../config').services;

exports.login = async (username, password) => {
  try {
    const requestOptions = {
      method: 'POST',
      uri: `${securityManagement}/api/user/login`,
      body: {
        authDetails: {
          username,
          password,
        },
      },
      json: true,
    };
  
    const loginRequest = await request(requestOptions);
    return {...loginRequest};
  } catch (err) {
    if(err.name === 'StatusCodeError'){
      return {};
    }
    throw boomify(err);
  }
};