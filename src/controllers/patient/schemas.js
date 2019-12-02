const generic401Error = require('../../lib/constants/generic401Error');

const patientBeforeSave = {
  address: {
    type: 'string',
    description: 'The address of the patient',
  },
  city: {
    type: 'string',
    description: 'The city of the patient',
  },
  coPayAmount: {
    type: 'string',
    description: 'The co-pay amount of the patient',
  },
  dob: {
    type: 'string',
    description: 'The date of birth of the patient',
  },
  gender: {
    type: 'string',
    description: 'The gender of the patient',
    enum: ['M', 'F'],
  },
  insuranceName: {
    type: 'string',
    description: 'The name of the patient\'\s insurance',
  },
  planNo: {
    type: 'string',
    description: 'The plan number of the patient\'\s insurance',
  },
  ssn: {
    type: 'string',
    description: 'The social security number of the user',
  },
  state: {
    type: 'string',
    description: 'The state that the patient resides',
  },
  userId: {
    type: 'number',
    description: 'The user ID of the patient',
  },
  zipCode:{
    type: 'string',
    description: 'The zip code of the patient',
  }
};

const patientAfterSave = {
  ...patientBeforeSave,
  updatedAt: {
    type: 'string',
    description: 'The last time the row was updated',
  },
  createdAt: {
    type: 'string',
    description: 'The date the patient row was created',
  },
  patientId: {
    type: 'string',
    description: 'The id of the patient that was created',
  },
  active: {
    type: 'string',
    description: 'Whether or not the row is active',
    enum: ['Y', 'N'],
  }
}; 

exports.createPatient = {
  description: 'Creates a new patient',
  tags: ['PatientManagement'],
  summary: 'Creates a new patient with the given values',
  body: {
    type: 'object',
    description: 'The patient that is being created',
    properties: {
      patient: patientBeforeSave,
    }
  },
  exposeRoute: true,
  response: {
    200: {
      description: 'Succesfully created the patient',
      type: 'object',
      properties: {
        patient: {
          type: 'object',
          properties: patientAfterSave,
          description: 'The newly created patient',
        },
      }
    },
    ...generic401Error,
  }
};

exports.updatePatient = {
  description: 'Patches a patient',
  tags: ['PatientManagement'],
  summary: 'Patches a patient with the given values',
  body: {
    type: 'object',
    description: 'The patient values to patch',
    properties: {
      patient: patientBeforeSave
    }
  },
  exposeRoute: true,
  response: {
    200: {
      description: 'Succesfully patched the patient',
      type: 'object',
      properties: {
        patient: {
          type: 'object',
          properties: patientAfterSave,
          description: 'Thew newly updated patient',
        },
      }
    },
    ...generic401Error, 
  }
};