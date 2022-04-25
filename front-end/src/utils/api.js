import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:4000"
});

// GET
export const getRequest = async (url) => {
    try {
        const result = await api.get(url);
        return Promise.resolve(result.data);
    } catch (error) {
        return Promise.reject(error);
    }
}

// POST
export const postRequest = async (url, form) => {
    try {
        const result = await api.post(url, form);
        return Promise.resolve(result.data);
    } catch (error) {
        return Promise.reject(error);
    }
}

// PUT
export const putRequest = async (url, form) => {
    try {
        const result = await api.put(url, form);
        return Promise.resolve(result.data);
    } catch (error) {
        return Promise.reject(error);
    }
}

// DELETE
export const deleteRequest = async (url) => {
    try {
        const result = await api.delete(url);
        return Promise.resolve(result.data);
    } catch (error) {
        return Promise.reject(error);
    }
}
