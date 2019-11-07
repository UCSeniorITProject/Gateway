const generic401Error = require('../../lib/constants/generic401Error');
exports.login = {
  description: 'Logs in and grants access token, if authorized',
  tags: ['SecurityManagement'],
  summary: 'Tries to login and grant access token, if credentials are valid',
  body: {
    type: 'object',
    properties: {
      authDetails: {
        required: ['username', 'password'],
        type: 'object',
        properties: {
          username: { type: 'string', description: 'The username of the user'},
          password: { type: 'string', description: 'The password of the user'},
        },
        description: 'The user to try to authorize',
      }
    },
  },
  exposeRoute: true,
  response: {
    200: {
      description: 'Successfully retrieved access token',
      type: 'object',
      properties: {
        accessToken: { type: 'string', description: 'The access token for the user'},
        refreshToken: { type: 'string', description: 'The refresh token for the user'},
      }
    },
    ...generic401Error,
  },
};

exports.refreshToken = {
  description: 'Refresh the given access token',
  tags: ['SecurityManagement'],
  summary: 'Refreshes the given access token with the refresh token',
  body: {
    type:'object',
    description: 'The refresh token to validate',
    required: ['refreshToken'],
    properties: {
      refreshToken: {
        type: 'string',
        description: 'The refresh token',
      },
    },
  },
  exposeRoute: true,
  response: {
    200: {
      description: 'Successfully granted auth token',
      type: 'object',
      properties: {
        accessToken: {
          type: 'string',
          description: 'The new auth token that was granted',
        },
        refreshToken: {
          type: 'string',
          description: 'The refresh token was granted',
        },
      }
    },
    401: {
      description: 'Bad authorization data',
      type: 'object',
      properties: {
        msg: {
          type: 'string',
          description: 'The message returned by the API',
          default: 'Invalid username or password',
        }
      },
    },
    ...generic401Error,
  },
};