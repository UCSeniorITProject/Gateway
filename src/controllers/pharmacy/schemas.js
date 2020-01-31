const generic401Error = require('../../lib/constants/generic401Error');

const pharmacyBeforeSave = {
  pharmacyName: {
    type: 'string',
    description: 'The name of the pharmacy',
    default: null,
  },
  zipCode: {
    type: 'string',
    description: 'The zipcode of the pharmacy',
    default: null,
  },
  address: {
    type: 'string',
    description: 'The address of the pharmacy',
    default: null,
  },
  city: {
    type: 'string',
    description: 'The city of the pharmacy',
    default: null,
  },
  state: {
    type: 'string',
    description: 'The state of the pharmacy',
    default: null,
  },
  active: {
    type: 'string',
    description: 'Whether or not the pharmacy is active',
    default: null,
    enum: ['Y', 'N'],
  },
};

const pharmacyAfterSave = {
  ...pharmacyBeforeSave,
  pharmacyId: {
    type: 'number',
    description: 'The ID of the pharmacy',
  },
};

exports.createPharmacy = {
  description: 'Creates a new pharmacy',
  tags: ['PharmacyManagement'],
  summary: 'Creates a new pharmacy with the given body',
  exposeRoute: true,
  body: {
    type: 'object',
    properties: {
      pharmacy: {
        required: Object.keys(pharmacyBeforeSave),
        type: 'object',
        properties: pharmacyBeforeSave,
        description: 'The pharmacy to create',
      },
    },
  },
  response: {
    200: {
      description: 'Succesfully created a pharmacy',
      type: 'object',
      properties: {
        pharmacy: {
          type: 'object',
          properties: pharmacyAfterSave,
        },
      },
    },
  },
};

exports.deletePharmacy = {
  description: 'Deletes the pharmacy',
  tags: ['PharmacyManagement'],
  summary: 'Creates a new pharmacy with the given body',
  exposeRoute: true,
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: {
        type: 'number',
        description: 'The ID of the pharmacy to delete',
      }
    },
  },
  response: {
    200: {
      description: 'Succesfully deleted the pharmacy',
      type: 'object',
      properties: {
        msg: {
          type: 'string',
          default: 'Succesfully deleted the pharmacy',
        }
      }
    },
  },
};

exports.patchPharmacy = {
  description: 'Patches an existing pharmacy',
  tags: ['PharmacyManagement'],
  summary: 'Patches a pharmacy with the given properties',
  exposeRoute: true,
  body: {
    type: 'object',
    properties: {
      pharmacy: {
        required: Object.keys(pharmacyBeforeSave),
        type: 'object',
        properties: pharmacyBeforeSave,
        description: 'The pharmacy data to patch',
      },
    },
  },
  response: {
    200: {
      description: 'Succesfully patched the pharmacy',
      type: 'object',
      properties: {
        pharmacy: {
          type: 'object',
          properties: pharmacyAfterSave,
        },
      },
    },
  },
};

exports.getPharmacyList = {
  description: 'Gets a list of pharmacies',
  tags: ['PharmacyManagement'],
  summary: 'Gets a list of all pharmacies',
  exposeRoute: true,
  response: {
    200: {
      description: 'Succesfully got a list of all pharmacies',
      type: 'object',
      properties: {
        pharmacies: {
          type: 'array',
          items: {
            type: 'object',
            properties: pharmacyAfterSave,
          },
        }
      }
    },
  },
};

exports.getPharmacyById = {
  description: 'Gets a pharmacy by its ID',
  tags: ['PharmacyManagement'],
  summary: 'Gets a specific pharmacy by its ID',
  exposeRoute: true,
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: {
        type: 'number',
        description: 'The ID of the pharmacy to retrieve',
      }
    },
  },
  response: {
    200: {
      description: 'Succesfully retrieved the pharmacy',
      type: 'object',
      properties: {
        pharmacy: {
          type: 'object',
          properties: pharmacyAfterSave,
        },
      },
    },
  },
};