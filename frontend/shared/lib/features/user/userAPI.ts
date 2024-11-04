import axios from 'axios';
const baseUrl = 'http://localhost:8000/api/login';

export const adminLogin = async (password: string) => {
    const response = await axios.post(`${baseUrl}/admin`, { password });
    return response.data;
};
