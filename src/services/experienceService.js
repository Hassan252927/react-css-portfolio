import api from './api';

const ENDPOINT = '/api/experiences';

export const getAllExperiences = async () => {
  try {
    const response = await api.get(ENDPOINT);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getExperienceById = async (id) => {
  try {
    const response = await api.get(`${ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createExperience = async (experienceData) => {
  try {
    const response = await api.post(ENDPOINT, experienceData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateExperience = async (id, experienceData) => {
  try {
    const response = await api.put(`${ENDPOINT}/${id}`, experienceData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteExperience = async (id) => {
  try {
    const response = await api.delete(`${ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}; 