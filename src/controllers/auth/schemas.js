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