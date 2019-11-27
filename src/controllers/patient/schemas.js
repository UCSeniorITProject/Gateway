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
}; 
