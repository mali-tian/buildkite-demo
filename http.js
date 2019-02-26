const http = require('http');
const express = require('express');

const routes = require('./routes');

function gracefulShutdown(logger, server) {
  server.close(() => {
    process.exit(0);
  });

  global.setTimeout(() => {
    process.exit(1);
  }, 5 * 1000);
}

async function httpServer(logger, config) {
  const app = express();
  app.use('/', routes);
  
  const port = process.env.PORT || 3000;
  const server = http.createServer(app);
  server.listen(port);
  console.log(`Server started at port: ${port}`);

  process.on('SIGTERM', () => gracefulShutdown(server));
  process.on('SIGINT', () => gracefulShutdown(server));
  return server;
}

module.exports = httpServer;
