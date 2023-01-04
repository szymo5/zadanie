import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});

export const signUp = (formData) => API.post("/user/signup", formData);
export const signIn = (formData) => API.post("/user/signin", formData);

export const fetchData = (category) => API.get(`/products?category=${category}`);
export const deleteProduct = (id, category) => API.delete(`/products/${id}?category=${category}`);
export const createProduct = (newProduct, category) => API.post(`/products/?category=${category}`, newProduct);
export const editProduct = (editProduct, category) => API.patch(`/products/?category=${category}`, editProduct);