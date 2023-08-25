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

export const getCarServices = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/ServiceRegisterPakingDetail_GetListFullWithCustomer`, data, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createCarServices = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/ServiceRegisterPakingFull_Add`, data, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateCarServices = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/ServiceRegisterPakingDetail_Update`, data, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteCarServicesItem = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/ServiceRegisterPakingDetail_Delete`, data, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteCarServices = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/ServiceRegisterPaking_Delete`, data, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};