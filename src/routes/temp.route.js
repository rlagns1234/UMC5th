import express from 'express';
import { tempTest, tempUser, tempException } from '../controllers/temp.controller.js';

export const tempRouter = express.Router();

tempRouter.get('/test', tempTest);

tempRouter.get('/user', tempUser);

tempRouter.get('/exception/:flag',tempException);
