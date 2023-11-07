/* eslint-disable react/prop-types */
import ReusableSVG from "../../../../reusableSVG/ReusableSVG";

function DcfCircleInner({ diff }) {
  const sdo = (1 - (diff < 0 ? Math.abs(diff) : diff)) * 525;
  return (
    <div className="w-full h-64 relative">
      <p
        className={`absolute top-[57.5%] left-1/2 translate-x-[-50%] italic text-lg ${
          diff < 0 ? "text-orange-800" : "text-blue-700"
        } `}
      >
        {diff < 0 ? "Premium" : "Discount"}
      </p>
      <ReusableSVG
        percent={diff}
        svgSize={250}
        strokeWidth={5}
        strokeDashoffset={sdo}
      />
    </div>
  );
}

export default DcfCircleInner;
