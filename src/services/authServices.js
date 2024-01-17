import axios from "axios";
const API_URL = "https://codebuddy.review";

export const signupApi = (
  emailId,
  password,
  firstName,
  lastName,
  address,
  countryCode,
  phoneNumber,
) => {
  return axios.post(`${API_URL}/submit`, {
    emailId,
    password,
    firstName,
    lastName,
    address,
    countryCode,
    phoneNumber,
  });
};
export const signinApi = () => {
  return axios.get(`${API_URL}/posts`, {});
};
