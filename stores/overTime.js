import axios from "axios";
import { API_URL } from "../app/@function/wsCode";

export const getHeaders = () => {
  const token = window.localStorage.getItem('token');
  if (token) {
    return {
      headers: {
        'Authorization': "Bearer " + token
      }
    }
  } else {
    return {}
  }
}

export const getListHourType = async () => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/Service_Register_After_Working_Hour_Type_GetList`, null, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getlistPremises = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/UnitGetList`, data, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getlistFoor = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/FloorGetList`, data, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getlistBlock = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/BlockGetListByBuildingId`, data, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getlistOverTime = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/Service_Register_After_Working_Hour_GetList`, data, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createOverTime = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/Service_Register_After_Working_Hour_Add`, data, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const udpateOverTime = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/Service_Register_After_Working_Hour_Update`, data, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteOverTime = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/Service_Register_After_Working_Hour_Delete`, data, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};

