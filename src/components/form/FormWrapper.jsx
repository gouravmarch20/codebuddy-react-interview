export function FormWrapper({ title, children }) {
  return (
    <>
      {/* <h2 className="mb-8	 text-center  ">{title}</h2> */}
      <div
        className="mt-4 	grid  gap-x-4 gap-y-8"
        style={{
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </>
  );
}
