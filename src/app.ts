import helmet from 'helmet';
import { Request, Response, NextFunction } from 'express';
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
import jwt from 'jsonwebtoken';


const app = express();

app.connect(require('./v1/databases/connectdb'));
// use middleware
app.use(helmet());
app.use(morgan('combined'));
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:4200'],
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routers
app.use(require('./v1/routes/index.router'));

// Error Handling Middleware called

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error('Not found');
  next(error);
});
// error handler middleware
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
});
module.exports = app;
