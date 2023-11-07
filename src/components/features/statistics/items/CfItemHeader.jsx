function CfItemHeader() {
  return (
    <div className="absolute top-[60%] h-6 w-[20rem]  text-xs flex items-center justify-between px-2 rounded-full shadow-hoverFins">
      <p className="text-blue-950/75 font-semibold text-[0.9rem] w-[50%] pl-6">
        Item
      </p>

      <p className="text-indigo-950 font-bold text-xs text-center w-[25%] italic">
        Value
      </p>
      <p className="text-indigo-950 font-bold text-xs text-center w-[25%] italic">
        Coverage
      </p>
    </div>
  );
}

export default CfItemHeader;
