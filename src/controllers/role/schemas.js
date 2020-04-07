const activeEnum = require('../../lib/constants/activeEnum');

const roleBeforeSave = {
  roleName: {
    type: 'string',
    description: 'The name of the role',
  },
  active: {
    type: 'string',
    enum: activeEnum,
    description: 'Whether or not the row is active',
  },
};

const roleAfterSave = {
  ...roleBeforeSave,
  id: {
    type: 'number',
    description: 'Identifier for the role',
  },
  createdAt: {
    type: 'string',
    description: 'The date the role was created',
  },
  updatedAt: {
    type: 'string',
    description: 'The date that the role was last updated',
  },
};


exports.getRolesWithFilter = {
	description: 'Gets a list of roles with the filter',
	tags: ['Role'],
	summary: 'Gets a list of all roles with the filter',
	exposeRoute: true,
	query: {
		type: 'object',
    description: 'The filter to retrieve roles with',
    properties: roleAfterSave,
	},
	response: {
		200: {
			description: 'Succesfully got the roles with the filter',
			type: 'object',
			properties: {
				roles: {
					type:'array',
					items: {
						type: 'object',
						properties: roleAfterSave,
					},
				},
			},
		},
	},
};