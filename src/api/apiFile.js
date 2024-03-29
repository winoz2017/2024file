import axios from 'axios';
const baseURL = 'http://13.124.245.111:8080/view';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postFile = async data => {
  try {
    const response = await axiosInstance.post('/file', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFileList = async () => {
  try {
    const response = await axiosInstance.get('/fileList');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFileById = async id => {
  try {
    const response = await axiosInstance.get(`/file/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
