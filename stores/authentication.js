import axios from "axios";
import { API_URL } from "../app/@function/wsCode";
import { useRouter } from "next/router";

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

export const getToken = async () => {
  try {
    var querystring = require('querystring');

    const response = await axios.post(`${API_URL}/Token`,
      querystring.stringify({
        userName: '0902090050',
        password: '0902090050',
        grant_type: 'password'
      }), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    return response.data;
  } catch (error) {
    return error;
  }
};

export const loginUser = async (data, token) => {
  try {
    let config = {
      headers: {
        'Authorization': "Bearer " + token,
      }
    }
    const response = await axios.post(
      `${API_URL}/api/LoginCustomer/LoginCustomer`, data, config
    );
    return response.data;
  } catch (error) {
    return error;
  }
};


export const UpdateUser = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/Customer/UpdateCustomer`, data, getHeaders()
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

// export const registerUser = async (data) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/api/user-client/register`, data
//     );
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// };

// export const loginUser = async (data) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/api/user-client/login`, data
//     );
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// };

// export const loginGoogle = async (data) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/api/user-client/login-google`, data
//     );
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// };

// export const loginFacebook = async (data) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/api/user-client/login-facebook`, data
//     );
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// };

// export const UploadAvatar = async (data, id) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/api/user-client/upload-avatar/${id}`, data, getHeaders()
//     );
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// };

// export const ChangePassword = async (data, id) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/api/user-client/change-password/${id}`, data, getHeaders()
//     );
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// };

// export const getInfoUser = async (id) => {
//   try {
//     const response = await axios.get(
//       `${API_URL}/api/user-client/getUser/${id}`
//     );
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// };

// export const getAllUser = async () => {
//   try {
//     const response = await axios.get(
//       `${API_URL}/api/user-client/getUsers`
//     );
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// }

// export const followUser = async (id, data) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/api/user-client/${id}/follow`, data, getHeaders()
//     );
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// }

// export const unFollowUser = async (id, data) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/api/user-client/${id}/unFollow`, data, getHeaders()
//     );
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// }

// export const resetPassword = async (data) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/api/reset-password`, data, getHeaders()
//     );

//     return response.data;
//   } catch {
//     return error;
//   }
// }

// export const passwordReset = async (id, token, data) => {
//   try {
//     const response = await axios.post(
//       `${API_URL}/api/reset-password/${id}/${token}`, data, getHeaders()
//     );

//     return response.data;
//   } catch {
//     return error;
//   }
// }