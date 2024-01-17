import React from "react";
import { useNavigate } from "react-router-dom";

export const ActionBtn = ({ isLastStep, isFirstStep, handleOnSubmit, handleBack }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mt-8  flex justify-end gap-2 md:gap-4	">
        {
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleBack();
            }}
            disabled={isFirstStep}
            className={`rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 ${
              isFirstStep ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            Back
          </button>
        }

        <button
          type="submit"
          className={`rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700`}
          onClick={(e) => {
            e.preventDefault();
            handleOnSubmit("SAVE");
          }}
        >
          Save
        </button>
        <button
          type="submit"
          disabled={isLastStep}
          className={`rounded  bg-blue-500 px-4 py-2 text-sm font-normal	  text-white hover:bg-blue-700 md:font-bold ${
            isLastStep ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleOnSubmit("NEXT");
          }}
        >
          Save and Next
        </button>
      </div>
      {isLastStep && (
        <div className="flex justify-end">
          <button
            type="submit"
            className={`mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 ${"s"}`}
            onClick={(e) => {
              e.preventDefault();

              handleOnSubmit("SUBMIT");
            }}
          >
            {" "}
            Submit
          </button>
          <button
            type="submit"
            className={`ml-4 mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 ${"s"}`}
            onClick={(e) => {
              e.preventDefault();

              navigate("/posts");
            }}
          >
            {" "}
            View Post
          </button>
        </div>
      )}
    </div>
  );
};
