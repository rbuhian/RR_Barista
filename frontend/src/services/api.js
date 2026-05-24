import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

const ADMIN_TOKEN = 'admin123';

const adminHeaders = () => ({ 'X-Admin-Token': ADMIN_TOKEN });

// Products
export const getProducts = () => api.get('/products');
export const createProduct = (data) => api.post('/products', data, { headers: adminHeaders() });
export const updateProduct = (id, data) => api.put(`/products/${id}`, data, { headers: adminHeaders() });
export const deleteProduct = (id) => api.delete(`/products/${id}`, { headers: adminHeaders() });
export const updateProductSale = (id, data) => api.put(`/products/${id}/sale`, data, { headers: adminHeaders() });

// Orders
export const createOrder = (data) => api.post('/orders', data);
export const getOrders = () => api.get('/orders', { headers: adminHeaders() });
export const updateOrderStatus = (ref, status) =>
  api.put(`/orders/${ref}/status`, { status }, { headers: adminHeaders() });

// Admin auth
export const adminLogin = (password) => api.post('/admin/login', { password });
