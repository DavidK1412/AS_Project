import prisma from "../utils/db_client.js";

// Create a new user
export async function createUser(data) {
    try {
        const user = await prisma.user.create({
            data,
        });
        return user;
    } catch (error) {
        throw new Error(`Failed to create user: ${error.message}`);
    }
}

// Get all users
export async function getUsers() {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        throw new Error(`Failed to get users: ${error.message}`);
    }
}

// Get a user by ID
export async function getUserById(id) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id,
            },
        });
        return user;
    } catch (error) {
        throw new Error(`Failed to get user: ${error.message}`);
    }
}

export async function getUserByEmail(email) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        return user;
    } catch (error) {
        throw new Error(`Failed to get user: ${error.message}`);
    }
}

// Update a user by ID
export async function updateUser(id, data) {
    try {
        const user = await prisma.user.update({
            where: {
                id,
            },
            data,
        });
        return user;
    } catch (error) {
        throw new Error(`Failed to update user: ${error.message}`);
    }
}

// Delete a user by ID
export async function deleteUser(id) {
    try {
        const user = await prisma.user.delete({
            where: {
                id,
            },
        });
        return user;
    } catch (error) {
        throw new Error(`Failed to delete user: ${error.message}`);
    }
}
