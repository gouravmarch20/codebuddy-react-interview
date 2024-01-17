import { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import { ActionBtn } from "./ActionBtn";
import { useSelector } from "react-redux";
import { FormThree } from "./FormThree";
import { FormTwo } from "./FormTwo";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import { isValidPassword, isValidEmail } from "../../helper";
import { toast } from "react-toastify";

export const FormOne = ({ data }) => {
  const {
    isFirstStep,
    isLastStep,
    back,
    next,
    handleOnSubmit: handleSubmit,
  } = useMultiStepForm([<FormOne />, <FormTwo />, <FormThree />]);

  const user = useSelector((state) => state?.userDetails?.user);

  const [email, setEmail] = useState(user?.emailId || "");
  const [password, setPassword] = useState(user?.password || "");
  const [onFormSubmit, setOnFormSubmit] = useState(false);

  const isValidData = () => {
    if (!isValidEmail(email)) {
      setOnFormSubmit(true);
      toast.error(`not valid  email`, {});
      return false;
    } else if (!isValidPassword(password)) {
      setOnFormSubmit(true);
      toast.error(`Password Must contain minimum 2 capital letters, 2 small letter, 2 numbers and 2 special characters.`, {});
      return false;
    } else {
      setOnFormSubmit(false);
      return true;
    }
  };

  const handleOnSubmit = (goto) => {
    if (isValidData()) {
      const data = {
        emailId: email,
        password: password,
      };
      handleSubmit(data);
      if (goto === "SAVE") {
        toast.success(`data save`, {});
        return;
      } else if (goto === "NEXT") {
        next()
        toast.success(`STEP 1 - DONE  `, {});
        return;
      }
    }
  };
  const handleBack = ()=> back()

  return (
    <FormWrapper title="User Details">
      <label htmlFor="email">Email </label>
      <input
        autoFocus
        required
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`rounded-sm	 border border-gray-300 p-1	 ${
          onFormSubmit && !isValidEmail(email) ? "border-red-600" : ""
        }`}
        placeholder="enter email"
      />
      <label htmlFor="password">Password</label>
      <input
        required
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`rounded-sm	 border border-gray-300 p-1	 ${
          onFormSubmit && !isValidPassword(password) ? "border-red-600" : ""
        }`}
        placeholder="enter password"
      />

      <div></div>

      <ActionBtn
        handleOnSubmit={handleOnSubmit}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        handleBack={handleBack}
      />
    </FormWrapper>
  );
};
