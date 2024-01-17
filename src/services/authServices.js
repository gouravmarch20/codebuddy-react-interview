import axios from "axios"
const API_URL = ""

export const signupApi = (username, email, password) => {
  return axios.post(`${API_URL}/signup`, {
    username,
    email,
    password,
  })
}
export const signinApi = (email, password) => {
  return axios.post(`${API_URL}/signin`, { email, password })
}
