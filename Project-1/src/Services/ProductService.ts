import axios from "axios";

const baseURL = 'https://api.escuelajs.co/api/v1/products';

export const createProduct = async (product:any) => {
    const response = await axios.post(`${baseURL}`, product);
    return response;
} 