const generic401Error = require('../../lib/constants/generic401Error');
const activeEnum = require('../../lib/constants/activeEnum');

const userBeforeSave = {
  username: {
    type: 'string',
    description: 'The username of the user',
  },
  password: {
    type: 'string',
    description: 'The password of the user (THIS GETS HASHED)',
  },
  email: {
    type: 'string',
    description: 'The email of the user',
  },
  phoneNumber: {
    type: 'string',
    description: 'The phone number of the user',
  },
  firstName: {
    type: 'string',
    description: 'The user\'s first name',
  },
  lastName: {
    type: 'string',
    description: 'The user\'s last name',
  },
  profilePicture: {
    type: 'string',
    description: 'The user\'s profile picture' ,
  },
  active: {
    type: 'string',
    enum: activeEnum,
    description: 'Whether or not the row is active',
  },
};

const userAfterSave = {
  ...userBeforeSave,
  createdAt: {
    type: 'string',
    description: 'The date the record was created',
  },
  updatedAt: {
    type: 'string',
    description: 'The date the record was updated',
  },
  id: {
    type: 'number',
    description: 'The identity of the user',
  },
};

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

exports.createUser = {
  description: 'Creates a new user with the given values',
  tags: ['User'],
  summary: 'Creates a new user with the given request body',
  body: {
    type: 'object',
    properties: {
      user: {
        required: Object.keys(userBeforeSave),
        type: 'object',
        properties: userBeforeSave,
        description: 'The user that to create',
      }
    },
  },
  exposeRoute: true,
  response: {
    200: {
      description: 'Successfully created the user',
      type: 'object',
      properties: {
        user: {
          type: 'object',
          properties: userAfterSave,
          description: 'The user that was created',
        },
      },
    },
    ...generic401Error, 
  },
};