import prisma from "../utils/db_client.js";

// Create a new client
export async function createClient(data) {
    try {
        const client = await prisma.client.create({
            data,
        });
        return client;
    } catch (error) {
        throw new Error(`Failed to create client: ${error.message}`);
    }
}

// Get all clients
export async function getClients() {
    try {
        const clients = await prisma.client.findMany();
        return clients;
    } catch (error) {
        throw new Error(`Failed to get clients: ${error.message}`);
    }
}

// Get a client by ID
export async function getClientById(id) {
    try {
        const client = await prisma.client.findUnique({
            where: {
                id,
            },
        });
        return client;
    } catch (error) {
        throw new Error(`Failed to get client: ${error.message}`);
    }
}

// Update a client by ID
export async function updateClientById(id, data) {
    try {
        const client = await prisma.client.update({
            where: {
                id,
            },
            data,
        });
        return client;
    } catch (error) {
        throw new Error(`Failed to update client: ${error.message}`);
    }
}

// Delete a client by ID
export async function deleteClientById(id) {
    try {
        const client = await prisma.client.delete({
            where: {
                id,
            },
        });
        return client;
    } catch (error) {
        throw new Error(`Failed to delete client: ${error.message}`);
    }
}
