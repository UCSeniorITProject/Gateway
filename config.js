module.exports = {
  services: {
    securityManagement:
      process.env.securityManagementAddress || "http://localhost:3001",
    patientService:
      process.env.patientServiceAddress || "http://localhost:3004",
    drugService: process.env.drugServiceAddress || "http://localhost:3003",
  },
  shouldFastifyLog: true,
  serverHost: process.env.serverAddress || "0.0.0.0",
  port: process.env.port || "3000",
  allowedOrigins: true,
};
