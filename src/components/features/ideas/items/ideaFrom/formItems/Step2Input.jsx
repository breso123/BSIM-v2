/* eslint-disable react/prop-types */

function Step2Input({ height, pl, onChange, value }) {
  return (
    <div className={`h-[${height}rem] mb-6`}>
      <textarea
        value={value}
        onChange={onChange}
        className="h-full w-[30rem] p-2 font-semibold text-blue-950/75 font-sans border border-blue-950/50 rounded-lg"
        placeholder={pl}
      />
    </div>
  );
}

export default Step2Input;
