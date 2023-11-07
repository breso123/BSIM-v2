function TechnicalsHeader() {
  return (
    <div
      style={{ gridTemplateColumns: "2fr 1fr 1fr" }}
      className="h-10 w-full mb-6 rounded-full grid grid-cols-3 shadow-hoverFins font-sans text-blue-950"
    >
      <p className="flex items-center justify-start pl-10  font-serif font-semibold">
        Indicator
      </p>
      <p className="flex items-center justify-center">Value</p>
      <p className="flex items-center justify-center italic font-semibold">
        Action
      </p>
    </div>
  );
}

export default TechnicalsHeader;
