module.exports = {
  401: {
    description: "Bad authorization data was received",
    type: "object",
    properties: {
      msg: {
        type: "string",
        default: "Bad authorization data was received",
      },
    },
  },
};
