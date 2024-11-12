import { MONGODB_URL } from "../../../api/utils/config.js";

import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import serverless from 'serverless-http';

import { storiesRouter } from "../../../api/controllers/stories.js";
import { loginRouter } from "../../../api/controllers/login.js";
import { unknownEndpoint, errorHandler, requestLogger, tokenExtractor, userExtractor } from "../../../api/utils/middleware.js";

export const app = express();
mongoose.set('strictQuery', false);

console.log('Connecting to MongoDB database');
mongoose.connect(MONGODB_URL)
    .then(result => {
        console.log('connected to MongoDB');
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message);
    });

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

app.use(requestLogger);
app.use(tokenExtractor);
app.use(userExtractor);

app.use('/api/stories', storiesRouter);
app.use('/api/login', loginRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

export const handler = serverless(app);
