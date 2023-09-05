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

export const getListDeliveryServices = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/Service_RegisterDelivery_GetListFull`, data, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const createDeliveryServices = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/Service_Register_Delivery_Add_Full`, data, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateDeliveryServices = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/Service_Register_Delivery_Detail_Update`, data, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteDeliveryServices = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/Service_Register_Delivery_Delete`, data, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteDeliveryServicesItem = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/api/ServiceRegistry/Service_Register_Delivery_Detail_Delete`, data, getHeaders());
    return response.data;
  } catch (error) {
    return error;
  }
};
