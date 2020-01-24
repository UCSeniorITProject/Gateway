const generic401Error = require('../../lib/constants/generic401Error');

const prescriptionBeforeSave = {
  doctorId: {
    type: 'number',
    description: 'The ID of the doctor that prescribed the medicine',
    default: null,
  },
  patientId: {
    type: 'number',
    description: 'The ID of the patient that was prescribed the medicine',
    default: null,
  },
};