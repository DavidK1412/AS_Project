import express from 'express';
import authRouter from './auth.router.js';
import employeeRouter from './employee.router.js';

const routerApi = (app) => {
    app.use('/auth', authRouter);
    app.use('/employees', employeeRouter);
}

export default routerApi;