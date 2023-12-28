function DcfTableHeader() {
  return (
    <div className="w-full flex gap-4 text-xs text-center mb-3 px-2 py-1 rounded-full font-semibold bg-blue-950 text-sky-200">
      <p className="w-1/4">Period</p>
      <p className="w-1/4">Free CF</p>
      <p className="w-1/4">WACC</p>
      <p className="w-1/4">Discounted</p>
    </div>
  );
}

export default DcfTableHeader;
