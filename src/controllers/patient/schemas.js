const generic401Error = require('../../lib/constants/generic401Error');

const patientBeforeSave = {
  address: {
    type: 'string',
    description: 'The address of the patient',
    default: null,
  },
  city: {
    type: 'string',
    description: 'The city of the patient',
    default: null,
  },
  coPayAmount: {
    type: 'string',
    description: 'The co-pay amount of the patient',
    default: null,
  },
  dob: {
    type: 'string',
    description: 'The date of birth of the patient',
    default: null,
  },
  gender: {
    type: 'string',
    description: 'The gender of the patient',
    default: null,
    enum: ['M', 'F'],
  },
  insuranceName: {
    type: 'string',
    description: 'The name of the patient\'\s insurance',
    default: null,
  },
  planNo: {
    type: 'string',
    description: 'The plan number of the patient\'\s insurance',
    default: null,
  },
  ssn: {
    type: 'string',
    description: 'The social security number of the user',
    default: null,
  },
  state: {
    type: 'string',
    description: 'The state that the patient resides',
    default: null,
  },
  zipCode:{
    type: 'string',
    description: 'The zip code of the patient',
    default: null,
  },
  userId:  {
    type: 'string',
    description: 'The user id of the patient',
    default: null,
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
    default: null,
  },
  active: {
    type: 'string',
    description: 'Whether or not the row is active',
    enum: ['Y', 'N'],
    default: null,
  }
}; 

exports.getPatientList = {
  description: 'Gets a list of patiients',
  tags: ['PatientManagement'],
  summary: 'Gets a list of patients to display',
  exposeRoute: true,
  query: {
    doctorId: {
      type: 'number',
      description: 'The id of the doctor who is looking for patients'
    }
  },
  response: {
    200: {
      description: 'Succesfully retrieved a list of patients',
      type: 'object',
      properties: {
        patients: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              userId: {
                type: 'number',
                description: 'The user id of the patient',
              },
              firstName: {
                type: 'string',
                description: 'The first name of the patient',
              },
              lastName: {
                type: 'string',
                description: 'The last name of the patient',
              }
            },
          }
        }
      }
    }
  }
}

exports.createPatient = {
  description: 'Creates a new patient',
  tags: ['PatientManagement'],
  summary: 'Creates a new patient with the given values',
  body: {
    type: 'object',
    description: 'The patient that is being created',
    properties: {
      patient: {
        type: 'object',
        properties: patientBeforeSave
      },
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
      patient: {
        type: 'object',
        properties: patientBeforeSave,
      }
    }
  },
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: {
        type: 'number',
        description: 'The ID of the patient to update',
      }
    },
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

exports.deletePatient = {
  description: 'Deletes the patient',
  tags: ['PatientManagement'],
  summary: 'Deletes the patient',
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: {
        type: 'number',
        description: 'The ID of the patient to delete',
      }
    },
  },
  exposeRoute: true,
  response: {
    204: {
      description: 'The patient was succesfully deleted',
      type: 'object',
      properties: {

      }
    },
    ...generic401Error,
  }
}

exports.getPatientByPatientId = {
  description: 'Gets patient by patient id',
  tags: ['PatientManagement'],
  summary: 'Gets a list of patients with the patient id',
  exposeRoute: true,
  params: {
    id: {
      type: 'number',
      description: 'The ID of the patient to find',
    }
  },
  response: {
    200: {
      description: 'Succesfully retrieved the patient',
      type: 'object',
      properties: {
        patient: {
          type: 'object',
          properties: patientAfterSave,
        }
      }
    },
  },
};

exports.getPatientBySSN = {
  description: 'Gets patients by SSN',
  tags: ['PatientManagement'],
  summary: 'Gets a list of patients by SSN',
  exposeRoute: true,
  query: {
    ssn: {
      type: 'number',
      description: 'The ssn of patient'
    }
  },
  response: {
    200: {
      description: 'Succesfully retrieved a list of patients',
      type: 'object',
      properties: {
        patient: {
          type: 'object',
          properties: patientAfterSave,
        }
      }
    }
  }
}