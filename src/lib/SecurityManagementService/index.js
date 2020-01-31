const request = require('request-promise');
const {securityManagement} = require('../../../config').services;
const qs = require('query-string');
const {boomify} = require('boom');

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

exports.bulkGetUserById = async (userIds, token) => {
  try {
    const requestOptions = {
      method: 'GET',
      uri: `${securityManagement}/api/user/bulk?`,
      qs: {
        id: userIds,
      },
      headers: {
        authorization: token,
      },
      json: true,
    }

    const bulkUserRequest = await request(requestOptions);
    return bulkUserRequest.users;
  } catch (err) {
    throw boomify(err);
  }
}

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

exports.verifyToken = async (token) => {
  try {
    const requestOptions = {
      method: 'POST',
      uri: `${securityManagement}/api/user/token/verify`,
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
    return {...userCreateRequest.user};
  } catch (err) {
    throw boomify(err);
  }
};

exports.getUserWithFilter = async (filter, token) => {
  try {
    const requestOptions = {
      method: 'GET',
      uri: `${securityManagement}/api/user?${qs.stringify(filter)}`,
      headers: {
        authorization: token,
      },
      json: true,
    };

    const usersRequest = await request(requestOptions);
    return usersRequest.users;
  } catch (err) {
    throw boomify(err);
  }
};

exports.updateUser = async (userID, propertiesToUpdate, token) => {
  try {
    console.log(userID)
    const requestOptions = {
      method: 'PATCH',
      uri: `${securityManagement}/api/user/${userID}`,
      body: {
        ...propertiesToUpdate,
      },
      headers: {
        authorization: token,
      },
      json: true,
    };

    const updateUserRequest = await request(requestOptions);
    return updateUserRequest.user;
  } catch (err){
    throw boomify(err);
  }
};