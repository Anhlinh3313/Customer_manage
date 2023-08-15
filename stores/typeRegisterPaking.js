import axios from "axios";
import { API_URL } from "../app/@function/wsCode";

export const getHeaders = () => {
  const data = window.localStorage.getItem('token');
  if (data) {
    return {
      headers: {
        'Authorization': JSON.parse(data)?.token
      }
    }
  } else {
    return {}
  }
}

export const getSelectedTypeRegisterPaking = async (data, id) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/ServiceRegistry/TypeRegisterPaking_GetList`, data, getHeaders()
      );
      return response.data;
    } catch (error) {
      return error;
    }
  };