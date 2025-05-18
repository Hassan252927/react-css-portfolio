import api from './api';

const ENDPOINT = '/api/education';

export const getAllEducation = async () => {
  try {
    const response = await api.get(ENDPOINT);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEducationById = async (id) => {
  try {
    const response = await api.get(`${ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createEducation = async (educationData) => {
  try {
    const response = await api.post(ENDPOINT, educationData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateEducation = async (id, educationData) => {
  try {
    const response = await api.put(`${ENDPOINT}/${id}`, educationData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteEducation = async (id) => {
  try {
    const response = await api.delete(`${ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}; 