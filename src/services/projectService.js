import api from './api';

const ENDPOINT = '/api/projects';

export const getAllProjects = async () => {
  try {
    const response = await api.get(ENDPOINT);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProjectById = async (id) => {
  try {
    const response = await api.get(`${ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProject = async (projectData) => {
  try {
    const response = await api.post(ENDPOINT, projectData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProject = async (id, projectData) => {
  try {
    const response = await api.put(`${ENDPOINT}/${id}`, projectData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProject = async (id) => {
  try {
    const response = await api.delete(`${ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}; 