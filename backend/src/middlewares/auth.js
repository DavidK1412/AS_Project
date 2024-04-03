import bcrypt from 'bcrypt';
import { getUserByEmail, createUser } from '../services/user.service.js';
import { createClient } from '../services/client.service.js';
import { generateToken } from './jwt.js';


export const login = async(email, password) => {
    if (!email || !password) {
        throw new Error('Email and password are required');
    }

    const user = await getUserByEmail(email);

    if (!user) {
        throw new Error('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error('Invalid credentials');
    }

    const token = generateToken({
        id: user.id,
        role_id: user.role_id
    });

    return token;
}


export const register = async(data) => {
    if (!data.email || !data.password) {
        throw new Error('Email and password are required');
    }

    let user = await getUserByEmail(data.email);

    if (user) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    user = await createUser({
        email: data.email,
        password: hashedPassword,
        role_id: data.role_id
    });

    const client = await createClient({
        name: data.name,
        address: data.address,
        phone: data.phone,
        user_id: user.id,
    });

    return true;
}
