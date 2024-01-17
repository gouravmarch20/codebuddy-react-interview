import React from "react";

export const ActionBtn = ({ isLastStep, isFirstStep, handleOnSubmit, handleBack }) => {
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
          className={`rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 ${
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
        </div>
      )}
    </div>
  );
};
