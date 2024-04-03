import express from 'express';
import { login, register } from '../middlewares/auth.js';

const authRouter = express.Router();


authRouter.post('/login', async (req, res) => {
    try {
        const token = await login(req.body.email, req.body.password);
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

authRouter.post('/register', async (req, res) => {
    try {
        await register(req.body);
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default authRouter;