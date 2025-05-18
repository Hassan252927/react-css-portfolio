import api from './api';

const ENDPOINT = '/api/skills';

export const getAllSkills = async () => {
  try {
    const response = await api.get(ENDPOINT);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getSkillById = async (id) => {
  try {
    const response = await api.get(`${ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createSkill = async (skillData) => {
  try {
    const response = await api.post(ENDPOINT, skillData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateSkill = async (id, skillData) => {
  try {
    const response = await api.put(`${ENDPOINT}/${id}`, skillData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteSkill = async (id) => {
  try {
    const response = await api.delete(`${ENDPOINT}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}; 