import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const getProject = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/project/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erroe aaya hai bhai",error);
  }
};

export const getProjectDetails = async (projectId) => {
  try {
    const response = await axios.get(`${API_URL}/project/details?projectId=${projectId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
