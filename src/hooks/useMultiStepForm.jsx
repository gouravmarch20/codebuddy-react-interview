import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFields ,nextStep } from "../redux/slices/userSlice";

export const useMultiStepForm = (steps) => {
  const currentStepIndex = useSelector((state) => state?.userDetails?.currentStepIndex);
  const dispatch = useDispatch();

  function next() {
    let step = currentStepIndex;
    if (step >= steps.length - 1) step = step;
    else step = step + 1;

    dispatch(nextStep(step));
  }

  function back() {
    let step = currentStepIndex;
    if (step <= 0) {
    } else step = step - 1;
    dispatch(nextStep(step));
  }

  function handleOnSubmit(data) {
    dispatch(updateFields(data));
  }

  function goTo(index) {
    dispatch(nextStep(index));
  }
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
    handleOnSubmit,
  };
};
