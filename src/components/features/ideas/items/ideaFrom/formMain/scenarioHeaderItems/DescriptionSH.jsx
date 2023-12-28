/* eslint-disable react/prop-types */
import Info from "../../formItems/Info";

function DescriptionSH({ desc }) {
  return (
    <div className="font-sans text-blue-950/75 font-semibold flex items-center gap-2">
      {desc}
      {desc === "Scenario" && <Info anly={true} />}
    </div>
  );
}

export default DescriptionSH;
