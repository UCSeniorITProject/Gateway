const request = require('request-promise');
const {securityManagement} = require('../../../config').services;
const qs = require('query-string');

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

exports.refreshAccessToken = async (refreshToken) => {
  try {
    const requestOptions = {
      method: 'POST',
      uri: `${securityManagement}/api/user/token/refresh`,
      body: {
        refreshToken,
      },
      json: true,
    };

    const tokenRefreshRequest = await request(requestOptions);
    return {...tokenRefreshRequest};
  } catch (err) {
    if(err.name === 'StatusCodeError'){
      return {};
    }
    throw boomify(err);
  }
};

exports.verifyToken = async (refreshToken) => {
  try {
    const requestOptions = {
      method: 'POST',
      uri: `${securityManagement}/api/token/verify`,
      body: {
        token,
      },
      json: true,
    };

    const tokenVerificationRequest = await request(requestOptions);
    return {...tokenVerificationRequest};
  } catch (err){
    throw boomify(err);
  }
};

exports.createUser = async (user) => {
  try {
    const requestOptions = {
      method: 'POST',
      uri: `${securityManagement}/api/user`,
      body: {
        user,
      },
      json: true,
    };

    const userCreateRequest = await request(requestOptions);
    return {user: userCreateRequest};
  } catch (err) {
    throw boomify(err);
  }
};

exports.getUserWithFilter = async (filter) => {
  try {
    const requestOptions = {
      method: 'GET',
      uri: `${securityManagement}/api/user?${qs.stringify(filter)}`,
      json: true,
    };

    const usersRequest = await request(requestOptions);
    return {users: usersRequest};
  } catch (err) {
    throw boomify(err);
  }
};