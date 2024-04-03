import prisma from "../utils/db_client.js";

// Create a new employee
export async function createEmployee(data) {
    try {
        const employee = await prisma.employee.create({ data });
        return employee;
    } catch (error) {
        throw new Error(`Failed to create employee: ${error.message}`);
    }
}

// Get all employees
export async function getAllEmployees() {
    try {
        const employees = await prisma.employee.findMany();
        return employees;
    } catch (error) {
        throw new Error(`Failed to get employees: ${error.message}`);
    }
}

// Get an employee by ID
export async function getEmployeeById(id) {
    try {
        const employee = await prisma.employee.findUnique({ where: { id } });
        return employee;
    } catch (error) {
        throw new Error(`Failed to get employee: ${error.message}`);
    }
}

// Update an employee
export async function updateEmployee(id, data) {
    try {
        const employee = await prisma.employee.update({ where: { id }, data });
        return employee;
    } catch (error) {
        throw new Error(`Failed to update employee: ${error.message}`);
    }
}

// Delete an employee
export async function deleteEmployee(id) {
    try {
        const employee = await prisma.employee.delete({ where: { id } });
        return employee;
    } catch (error) {
        throw new Error(`Failed to delete employee: ${error.message}`);
    }
}
