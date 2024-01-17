import { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import { ActionBtn } from "./ActionBtn";
import { useSelector } from "react-redux";
import { FormThree } from "./FormThree";
import { FormOne } from "./FormOne";
import { useMultiStepForm } from "../../hooks/useMultiStepForm";
import { toast } from "react-toastify";
import { isValidFirstName, isValidAddress } from "../../helper";
export const FormTwo = ({}) => {
  const {
    isFirstStep,
    isLastStep,
    back,
    next,
    handleOnSubmit: handleSubmit,
  } = useMultiStepForm([<FormOne />, <FormTwo />, <FormThree />]);
  const user = useSelector((state) => state?.userDetails?.user);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [address, setAddress] = useState(user.address);
  const [onFormSubmit, setOnFormSubmit] = useState(false);

  const isValidData = () => {
    if (!isValidFirstName(firstName)) {
      setOnFormSubmit(true);
      toast.error(`not valid first name`, {});

      return false;
    } else if (!isValidAddress(address)) {
      setOnFormSubmit(true);
      toast.error(`Address length should be minimum 10 chars`, {});
      return false;
    } else {
      setOnFormSubmit(false);
      return true;
    }
  };

  const handleOnSubmit = (goto) => {
    if (isValidData()) {
      const data = {
        firstName: firstName,
        lastName: lastName,
        address: address,
      };

      handleSubmit(data);
      if (goto === "SAVE") {
        toast.success(`data save`, {});
        return;
      } else if (goto === "NEXT") {
        next();
        toast.success(`STEP 2 - DONE  `, {});
        return;
      }
    }
  };
  const handleBack = () => back();

  return (
    <>
      <FormWrapper title="User Info">
        <label htmlFor="firstName">First Name * </label>
        <input
          autoFocus
          required
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="enter firstName"
          className={`rounded-sm	 border border-gray-300 p-1	 ${
            onFormSubmit && !isValidFirstName(firstName) ? "border-red-600" : ""
          }`}
          id="firstName"
        />
        <label htmlFor="lastName">LastName</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="enter lastName"
          className="rounded-sm	 border border-gray-300 p-1	"
          id="lastName"
        />
        <label htmlFor="address">Address * </label>
        <input
          required
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="enter address"
          className={`rounded-sm	 border border-gray-300 p-1	 ${
            onFormSubmit && !isValidAddress(address) ? "border-red-600" : ""
          }`}
          id="address"
        />
        <div></div>

        <ActionBtn
          handleOnSubmit={handleOnSubmit}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          handleBack={handleBack}
        />
      </FormWrapper>
    </>
  );
};
