const mongoose = require('mongoose');
const readLine = require('readline');

let dbURL = 'mongodb://localhost/travlr';

// use production DB if available
if (process.env.NODE_ENV === 'production') {
  dbURL = process.env.DB_HOST || process.env.MONGODB_URI;
}

// connect function
const connect = () => {
  mongoose.connect(dbURL)
    .then(() => {
      console.log("DB connected");
    })
    .catch((err) => {
      console.log("DB error", err);
    });
};

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected');
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('DB disconnected');
});

// Windows fix for SIGINT
if (process.platform === 'win32') {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on('SIGINT', () => {
    process.emit('SIGINT');
  });
}

// graceful shutdown helper
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`DB disconnected through ${msg}`);
    callback();
  });
};

process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

// start connection
connect();

// models
require('../models/users');
require('../models/meals');
require('../models/news');
require('../models/rooms');
require('../models/trips');