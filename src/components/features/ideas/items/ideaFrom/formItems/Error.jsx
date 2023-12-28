import ErrorSVG from "../../../../../../ui/ErrorSVG";

/* eslint-disable react/prop-types */
function Error({ errors }) {
  const filterErrs = Object.entries(errors).filter((v) => v[1] !== "")[0];

  return (
    <div className="w-full h-8 flex items-center justify-center">
      <p
        className={`font-sans text-sm tracking-wider flex items-center gap-3 font-semibold italic ${
          !filterErrs ? "text-blue-700" : "text-red-700"
        }`}
      >
        <span>
          <ErrorSVG filterErrs={filterErrs} />
        </span>
        {!filterErrs ? "All inputs are properly filled" : filterErrs[1]}
      </p>
    </div>
  );
}

export default Error;
