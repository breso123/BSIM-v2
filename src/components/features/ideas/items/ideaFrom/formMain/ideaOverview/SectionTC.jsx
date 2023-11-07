/* eslint-disable react/prop-types */

function SectionTC({ title, content }) {
  return (
    <div className="w-full px-24">
      <p className="h-10 w-full mb-7 text-xl font-semibold text-blue-950/75">
        {title}
      </p>
      <p className=" w-full font-sans text-justify">{content}</p>
    </div>
  );
}

export default SectionTC;
