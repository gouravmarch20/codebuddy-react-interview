import { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import { ActionBtn } from "./ActionBtn";
import { useSelector } from "react-redux";
import { FormTwo } from "./FormTwo";
import { FormOne } from "./FormOne";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import { toast } from "react-toastify";
import { isValidPhoneNumber } from "../../helper";
import {  useNavigate } from "react-router-dom";

export const FormThree = () => {
    const navigate = useNavigate()

  const {
    isFirstStep,
    isLastStep,
    back,
    next,
    handleOnSubmit: handleSubmit,
  } = useMultiStepForm([<FormOne />, <FormTwo />, <FormThree />]);
  const user = useSelector((state) => state?.userDetails?.user);

  const [countryCode, setCountryCode] = useState(user.countryCode);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [isAgreeTC, setIsAgreeTC] = useState(user.isAgreeTC || false);
  const [onFormSubmit, setOnFormSubmit] = useState(false);

  const isValidData = () => {

    
    if (!countryCode) {
      setOnFormSubmit(true);
      toast.error(`not valid countryCode`, {});
      return false;
    } else if (!isValidPhoneNumber(phoneNumber)) {
      setOnFormSubmit(true);
      toast.error(`not valid  phone number`, {});
      return false;
    } else if (!isAgreeTC) {
      setOnFormSubmit(true);
      toast.error(`not agree term and condition `, {});
      return false;
    } else {
      setOnFormSubmit(false);
      return true;
    }
  };
  const handleBack = ()=> back()


  const handleOnSubmit = (goto) => {
    if (isValidData()) {
      const data = {
        countryCode: countryCode,
        phoneNumber: phoneNumber,
        isAgreeTC : isAgreeTC
      };

      handleSubmit(data);
      if (goto === "SAVE") {
        toast.success(`data save`, {});
        return;
      }else if(goto === "SUBMIT"){
        navigate("/posts")
      }
    }
  };

  return (
    <FormWrapper title="Last Step ">
      <label htmlFor="countryCode">Country Code</label>

      <select
        onChange={(e) => {
          setCountryCode(e.target.value);
        }}
        value={countryCode}
        placeholder="enter country code"
        className="rounded-sm	 border border-gray-300 p-1	"
        id="countryCode"
      >
        <option value="+91">+91 - India </option>
        <option value="+1">+1 - US </option>
      </select>
      <label htmlFor="phoneNo">Phone Number</label>
      <input
        autoFocus
        required
        type="tel"
        value={phoneNumber}
        id="phoneNo"
        pattern="[0-9]{10}"
        className={`rounded-sm	 border border-gray-300 p-1	 ${
          onFormSubmit && !isValidPhoneNumber(phoneNumber) ? "border-red-600" : ""
        }`}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="enter phone no"
      />

      <label htmlFor="checkbox"> Terms of Service * </label>
      <div>
        <input
          type="checkbox"
          id="checkbox"
          checked={isAgreeTC}
          onChange={(e) => {
            setIsAgreeTC(e.target.checked);
          }}
          className=""
        />
      </div>
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
