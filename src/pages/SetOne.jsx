import { FormEvent, useState } from "react";

import { FormTwo } from "../components/form/FormTwo";
import { FormThree } from "../components/form/FormThree";
import { FormOne } from "../components/form/FormOne";
import { useMultiStepForm } from "../hooks/useMultiStepForm";

function SetOne() {
  const { steps, currentStepIndex, step, isFirstStep, goTo, back, next } = useMultiStepForm([
    <FormOne />,
    <FormTwo />,
    <FormThree />,
  ]);

  return (

    <>
     <h2 className="text-4xl font-normal leading-normal mt-0 mb-2 text-pink-600 text-center" >Set One  </h2>
    <div className="relative m-4 mx-auto	max-w-max rounded-md border border-sky-500 p-8">
      <div className="flex items-center justify-center gap-6 p-1">
        <p
          className={`${
            currentStepIndex === 0 ? "rounded bg-sky-700 px-2 py-1 text-white" : ""
          } cursor-pointer `}
          onClick={() => goTo(0)}
        >
          Step 1{" "}
        </p>
        <p
          className={`${
            currentStepIndex === 1 ? "rounded bg-sky-700 px-2 py-1 text-white" : ""
          } cursor-pointer`}
          onClick={() => goTo(1)}
        >
          Step 2{" "}
        </p>
        <p
          className={`${
            currentStepIndex === 2 ? "rounded bg-sky-700 px-2 py-1 text-white" : ""
          } cursor-pointer `}
          onClick={() => goTo(2)}
        >
          Step 3{" "}
        </p>
      </div>
      <form>
        <div className="absolute  right-2 top-2">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
      </form>
    </div>
    </>

  );
}

export default SetOne;
