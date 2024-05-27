import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const getProducts = () => axios.get(`${API_BASE_URL}/products`);
export const getProduct = (id) => axios.get(`${API_BASE_URL}/products/${id}`);
export const addProduct = (product, token) => axios.post(`${API_BASE_URL}/products`, product, {
  headers: { Authorization: token }
});
export const register = (credentials) => axios.post(`${API_BASE_URL}/register`, credentials);
export const login = (credentials) => axios.post(`${API_BASE_URL}/login`, credentials);
