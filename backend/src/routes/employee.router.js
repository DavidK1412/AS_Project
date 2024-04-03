import express from 'express';

import { createEmployee, deleteEmployee, getEmployeeById, getAllEmployees, updateEmployee } from '../services/employee.service.js';
// import { verifyToken, decodedToken } from '../middlewares/auth.js';

const employeeRouter = express.Router();

employeeRouter.get('/', async (req, res) => {
    try {
        const employees = await getAllEmployees();
        res.status(200).json(employees);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

employeeRouter.get('/:id', async (req, res) => {
    try {
        const employee = await getEmployeeById(req.params.id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

employeeRouter.post('/', async (req, res) => {
    try {
        await createEmployee(req.body);
        res.status(201).json({ message: 'Employee created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

employeeRouter.put('/:id', async (req, res) => {
    try {
        await updateEmployee(req.params.id, req.body);
        res.status(200).json({ message: 'Employee updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

employeeRouter.delete('/:id', async (req, res) => {
    try {
        await deleteEmployee(req.params.id);
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


export default employeeRouter;