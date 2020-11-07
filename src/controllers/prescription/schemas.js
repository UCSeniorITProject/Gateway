const generic401Error = require("../../lib/constants/generic401Error");

const prescriptionBeforeSave = {
  doctorId: {
    type: "number",
    description: "The ID of the doctor that prescribed the medicine",
  },
  patientId: {
    type: "number",
    description: "The ID of the patient that was prescribed the medicine",
  },
  active: {
    type: "string",
    enum: ["Y", "N"],
    description: "Whether or not the prescription is active",
    default: "Y",
  },
  pharmacyId: {
    type: "number",
    description: "The id of the pharmacy the prescription is being created for",
  },
};

const prescriptionAfterSave = {
  ...prescriptionBeforeSave,
  prescriptionId: {
    type: "number",
    description: "The id of the prescription being created",
    default: null,
  },
  createdAt: {
    type: "string",
    description: "The time the row was created",
  },
  updatedAt: {
    type: "string",
    description: "The last time the row was updated",
  },
};

exports.createPrescription = {
  description: "Creates a new prescription with the given values",
  tags: ["PrescriptionManagement"],
  summary: "Creates a new prescription with the given values",
  body: {
    type: "object",
    properties: {
      prescription: {
        type: "object",
        properties: prescriptionBeforeSave,
        required: Object.keys(prescriptionBeforeSave),
        description: "The prescription to create",
      },
    },
  },
  exposeRoute: true,
  response: {
    200: {
      description: "Succesfully created the prescription",
      type: "object",
      properties: {
        prescription: {
          type: "object",
          properties: prescriptionAfterSave,
          description: "The prescription that was created",
        },
      },
    },
    ...generic401Error,
  },
};

exports.getPrescriptionsByMonthForDoctor = {
  description: "Gets the list of prescriptions by month for the doctor",
  tags: ["Prescription"],
  summary: "Gets the list of prescriptions by month for the doctor",
  exposeRoute: true,
  params: {
    type: "object",
    required: ["doctorId"],
    properties: {
      doctorId: {
        type: "number",
        description: "The ID of the doctor",
      },
    },
  },
  response: {
    200: {
      description: "The list of the prescriptions by month",
      type: "object",
      properties: {
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              createdAt: {
                type: "string",
                description:
                  "The grouped by aggregate date of the prescriptions by month",
              },
              numPrescriptions: {
                type: "number",
                description:
                  "The number of prescriptions in that specific month",
              },
            },
          },
        },
      },
    },
  },
};

exports.getPrescriptionsByMonthForPatient = {
  description: "Gets the list of prescriptions by month for the patient",
  tags: ["Prescription"],
  summary: "Gets the list of prescriptions by month for the patient",
  exposeRoute: true,
  params: {
    type: "object",
    required: ["patientId"],
    properties: {
      patientId: {
        type: "number",
        description: "The ID of the prescription to delete",
      },
    },
  },
  response: {
    200: {
      description: "The list of the prescriptions by month",
      type: "object",
      properties: {
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              createdAt: {
                type: "string",
                description:
                  "The grouped by aggregate date of the prescriptions by month",
              },
              numPrescriptions: {
                type: "number",
                description:
                  "The number of prescriptions in that specific month",
              },
            },
          },
        },
      },
    },
  },
};

exports.deletePrescription = {
  description: "Deletes the prescription with the given filtr",
  tags: ["PrescriptionManagement"],
  summary: "Deletes the given prescription",
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: {
        type: "number",
        description: "The ID of the prescription to delete",
      },
    },
  },
  response: {
    200: {
      description: "Succesfully deletede the prescription",
      type: "object",
      properties: {
        msg: {
          type: "string",
          default: "Succesfully deleted the prescription",
        },
      },
    },
  },
};

exports.patchPrescription = {
  description: "Patches the given prescription fields",
  tags: ["PrescriptionManagement"],
  summary: "Patches the given prescription",
  body: {
    type: "object",
    properties: prescriptionBeforeSave,
    description: "The prescription fields to patch",
  },
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: {
        type: "number",
        description: "The ID of the prescription to delete",
      },
    },
  },
  exposeRoute: true,
  response: {
    200: {
      description: "The patched prescription",
      type: "object",
      properties: prescriptionAfterSave,
    },
  },
};

exports.getPrescriptionById = {
  description: "Gets the prescription by its ID",
  tags: ["PrescriptionManagement"],
  summary: "Gets the prescription by its ID",
  params: {
    type: "object",
    required: ["id"],
    properties: {
      id: {
        type: "number",
        description: "The ID of the prescription to delete",
      },
    },
  },
  exposeRoute: true,
  response: {
    200: {
      description: "The prescription",
      type: "object",
      properties: prescriptionAfterSave,
    },
  },
};
