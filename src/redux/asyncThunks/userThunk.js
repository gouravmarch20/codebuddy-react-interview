import { createAsyncThunk } from "@reduxjs/toolkit";
import { signinApi, signupApi } from "../../services";
import { ToastContainer, toast } from "react-toastify";

export const signUp = createAsyncThunk(
  "signup",
  async ({ emailId, password, firstName, lastName, address, countryCode, phoneNumber }) => {
    try {
      const response = await signupApi(
        emailId,
        password,
        firstName,
        lastName,
        address,
        countryCode,
        phoneNumber,
      );

      toast.success("signup success", {});

      return response?.data;
    } catch (error) {
      toast.error(`backend response fail`, {});
    }
  },
);
export const getPost = createAsyncThunk("getPost", async () => {
  try {
    const response = await signinApi();
    return response;
  } catch (error) {
    toast.error("backend issue");
  }
});
