import axios from 'axios';
import { User } from '../types/User';

const api = axios.create({
    baseURL: 'http://192.168.0.11:3000',
    withCredentials: true
});

export const useApi = () => ({
    refreshToken: async () => {
        const response = await api.get('/auth/refreshtoken');
        return response;
    },
    signin: async (email: string, password: string): Promise<User> => {
        const response = await api.post('/auth/signin', { email, password });
        return response.data;
    },
    logout: async () => {
        return { status: true };
        const response = await api.post('/logout');
        return response.data;
    },
});