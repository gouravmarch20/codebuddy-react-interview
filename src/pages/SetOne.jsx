import { FormEvent, useState } from "react";

import { FormTwo } from "../components/form/FormTwo";
import { FormThree } from "../components/form/FormThree";
import { FormOne } from "../components/form/FormOne";
import { useMultiStepForm } from "../hooks/useMultiStepForm";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function SetOne() {
  const { steps, currentStepIndex, step, isFirstStep, goTo, back, next } = useMultiStepForm([
    <FormOne />,
    <FormTwo />,
    <FormThree />,
  ]);

  return (
    <>
      <h2 className="mb-2 mt-0 text-center text-4xl font-bold text-pink-600">
        Set One{" "}
      </h2>
      <Link to="/" className="mb-4 flex items-center text-blue-600 hover:underline">
        <Icon icon="mdi:arrow-left" className="mr-2" />
        Back to Home
      </Link>

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
