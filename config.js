module.exports = {
  services: {
    securityManagement: process.env.securityManagementAddress || 'http://localhost:3001'
  },
  shouldFastifyLog: true,
  serverHost:  process.env.serverAddress || '0.0.0.0' ,
  port: process.env.port || '3000',
  allowedOrigins: ['http://localhost:3002'],
};
