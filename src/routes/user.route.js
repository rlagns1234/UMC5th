import express from 'express';

export const userRouter = express.Router({mergeParams: true});

userRouter.get('/user', tempUser);