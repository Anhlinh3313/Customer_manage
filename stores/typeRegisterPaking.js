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

export const getSelectedTypeRegisterPaking = async () => {
    try {
      const response = await axios.post(
        `${API_URL}/api/ServiceRegistry/TypeRegisterPaking_GetList`, null, getHeaders()
      );
      return response.data;
    } catch (error) {
      return error;
    }
  };